# leipzig.github.io

Personal site of Jeremy Leipzig, built with [Zensical](https://zensical.org).

## Layout

- `data/*.yml`: content (publications, software, talks, teaching, profile/experience). Edit these.
- `scripts/build_site.py`: renders the YAML into `docs/{index,publications,portfolio,experience,talks}.md`. Don't edit those generated pages by hand.
- `docs/rhylthyme.md`: hand-written project page.
- `docs/assets/thumbs/{pubs,software}/<id>.jpg`: card thumbnails, matched by `id`. Items without one get a generated cover in `docs/assets/thumbs/generated/`.
- `overrides/home.html`: home page hero. `docs/stylesheets/extra.css`: theme.

## Run locally

```sh
uv venv && uv pip install -r requirements.txt
.venv/bin/python scripts/build_site.py && .venv/bin/zensical serve
```

Pushing to `master` deploys via `.github/workflows/deploy.yml` (Pages source must be set to "GitHub Actions").
