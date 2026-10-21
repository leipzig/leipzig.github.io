# leipzig.github.io

Personal site of Jeremy Leipzig, built with [Zensical](https://zensical.org) and
published at https://leipzig.github.io.

## How it is put together

| Path | What it is |
|---|---|
| `data/*.yml` | All the content: publications, software, talks, teaching, profile and experience. Edit these. |
| `scripts/build_site.py` | Renders the YAML into `docs/{index,publications,portfolio,experience,talks}.md`. Those pages are regenerated on every build, so don't edit them by hand. |
| `docs/rhylthyme.md` | A hand-written project page. Add other hand-written pages to `docs/` and to `nav` in `zensical.toml`. |
| `docs/assets/thumbs/{pubs,software}/<id>.jpg` | Card thumbnails, matched to entries by `id`. Entries without one get a generated cover in `docs/assets/thumbs/generated/`. |
| `overrides/home.html` | The home page banner. |
| `docs/stylesheets/extra.css`, `docs/javascripts/extra.js` | Theme and the publication filter. |
| `zensical.toml` | Site name, URL, navigation, social links, fonts and palette. |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on every push to `master`. |

## Build it locally

Requires Python 3.10 or later.

```sh
git clone https://github.com/leipzig/leipzig.github.io
cd leipzig.github.io
python -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python scripts/build_site.py
.venv/bin/zensical serve        # http://localhost:8000
```

`zensical build` writes the static site to `site/`. Rerun `scripts/build_site.py`
whenever you change `data/*.yml`.

## Make your own site from it

1. Fork or copy the repository and name it `<username>.github.io`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Replace the content in `data/*.yml`, `docs/rhylthyme.md`, the CV PDFs in
   `docs/files/` and `docs/`, `docs/assets/profile.png` and
   `docs/assets/hero.jpg`.
4. Update `site_url`, `site_name`, `nav` and the social links in
   `zensical.toml`, the banner text in `overrides/home.html`, and the name
   variants in `NAME_RE` in `scripts/build_site.py` (used to bold your name in
   author lists).
5. Delete the thumbnails in `docs/assets/thumbs/` that aren't yours and add your
   own, named by `id`.
6. Push to `master`.

## License

The code (scripts, templates, styles, configuration and workflow) is
[MIT](LICENSE). The content (text, data and my own images) is
[CC BY 4.0](LICENSE-CONTENT.md), credited to Jeremy Leipzig. Figures from
published papers and a few other third-party images keep their own terms; see
[LICENSE-CONTENT.md](LICENSE-CONTENT.md).
