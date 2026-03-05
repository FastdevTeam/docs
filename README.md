# Requirements Discovery Playbook (GitHub Pages)

This repository contains a **GitHub Pages** site (served from `/docs`) that documents a phased approach to software requirements gathering:

**pre-work intake → sales discovery → workflow workshop → technical deep dive + NFR scenarios → security/procurement track → prototype/PoV → structured handover + backlog refinement**.

## Enable GitHub Pages (from `/docs`)
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default)
   - **Folder:** `/docs`
4. Save. GitHub will publish the site.

## Local preview (optional)
Run the site locally from the `docs` folder:

```bash
cd docs
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Site content
The site source lives in `/docs`:
- `index.md` — Landing page.
- `overview.md` — One common overview for all audiences.
- `process.md` — How the overall discovery process is executed.
- `phases/` — Phase-by-phase guidance (purpose, agenda, inputs, outputs).
- `audiences/` — Guidance per role (Sales, Solutions Architect, Product/Delivery, Security, Customer PO).
- `templates/` — Copy/paste templates and checklists.
- `references.md` — Supporting references.

## License
Set your license policy (internal/proprietary vs OSS). A placeholder is provided in `LICENSE`.
