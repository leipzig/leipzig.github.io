#!/usr/bin/env python3
"""Fetch per-paper citation counts from a Google Scholar profile.

Matches each entry in data/publications.yml to a row on the profile by title
and writes data/citations.yml, which build_site.py reads. Run it by hand now
and then; Scholar blocks automated traffic, so it is not part of the deploy.

    python scripts/fetch_citations.py [--html saved_profile.html]
"""
import argparse
import datetime
import difflib
import html
import re
import sys
import urllib.request
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
SCHOLAR_USER = "dTC-vJIAAAAJ"
PROFILE = f"https://scholar.google.com/citations?user={SCHOLAR_USER}&hl=en&cstart=0&pagesize=100"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"


def norm(s):
    s = re.sub(r"[^a-z0-9]+", " ", html.unescape(s).lower()).strip()
    return re.sub(r"^(the|a|an) ", "", s)


def best_match(title, candidates):
    """Closest Scholar title. Scholar truncates long titles and sometimes
    shortens subtitles, so compare over the length of the shorter title."""
    best, score = None, 0.0
    for c in candidates:
        n = min(len(title), len(c))
        if n < 12:
            continue
        s = difflib.SequenceMatcher(None, title[:n], c[:n]).ratio()
        if s > score:
            best, score = c, s
    return best if score >= 0.85 else None


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(req, timeout=30).read().decode("utf-8")


def parse(page):
    rows = []
    for r in re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', page, re.S):
        title = re.search(r'class="gsc_a_at"[^>]*>(.*?)</a>', r, re.S)
        cited = re.search(r'<a href="([^"]*)" class="gsc_a_ac[^"]*">(\d*)</a>', r)
        if title:
            rows.append({
                "title": html.unescape(re.sub("<[^>]+>", "", title.group(1))),
                "count": int(cited.group(2)) if cited and cited.group(2) else 0,
                "url": html.unescape(cited.group(1)) if cited and cited.group(2) else None,
            })
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--html", help="use a saved copy of the profile page instead of fetching it")
    args = ap.parse_args()
    page = Path(args.html).read_text() if args.html else fetch(PROFILE)
    rows = parse(page)
    if not rows:
        sys.exit("No publications found; Scholar may have served a CAPTCHA. Save the profile page in a browser and pass --html.")

    by_title = {norm(r["title"]): r for r in rows}
    pubs = yaml.safe_load((ROOT / "data/publications.yml").read_text())
    out, missing = {}, []
    for p in pubs:
        match = best_match(norm(p["title"]), by_title)
        if not match:
            missing.append(p["id"])
            continue
        r = by_title[match]
        out[p["id"]] = {"count": r["count"], "url": r["url"]}

    data = {"source": PROFILE, "as_of": datetime.date.today().isoformat(), "papers": out}
    (ROOT / "data/citations.yml").write_text(yaml.safe_dump(data, sort_keys=False, allow_unicode=True))
    print(f"Matched {len(out)} of {len(pubs)} publications.")
    for m in missing:
        print("  no match:", m)


if __name__ == "__main__":
    main()
