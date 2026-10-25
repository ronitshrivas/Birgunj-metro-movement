# वीरगंज मेट्रो मुभमेन्ट — Birgunj Metro Movement

A single-page, bilingual (Nepali + English) website for the **Birgunj Metro Movement**.
Built with plain **HTML, CSS, and JavaScript** — no build step, no dependencies. Just open it.

> **स्लोगन:** “वीरगंज उठ्छ, महानगर वीरगंज उठ्छ।” — *Madhesh Will Rise. Metropolitan Birgunj Will Rise.*

---

## 📁 Folder structure

```
birgunj-metro-movement/
├── index.html          # the whole page
├── css/
│   └── style.css        # all styles (rising-sun civic theme)
├── js/
│   └── main.js          # nav toggle, scroll reveal, count-up stats
├── assets/
│   ├── logo.svg         # custom circular emblem logo
│   └── favicon.svg      # simplified mark (browser tab icon)
├── .nojekyll            # tells GitHub Pages to serve files as-is
└── README.md
```

---

## 💻 Run it locally

Just **double-click `index.html`** — it opens in your browser. That's it.

(Optional) To run a local server:
```bash
cd birgunj-metro-movement
python -m http.server 8000
# then open http://localhost:8000
```

---

## 🚀 Host it free on GitHub Pages

You get a public URL like `https://ronitshrivas.github.io/birgunj-metro-movement/`.

### Option A — Command line (git)

```bash
cd birgunj-metro-movement

git init
git add .
git commit -m "Birgunj Metro Movement website"
git branch -M main

# create an empty repo named "birgunj-metro-movement" on github.com first, then:
git remote add origin https://github.com/ronitshrivas/birgunj-metro-movement.git
git push -u origin main
```

Then on GitHub:
1. Open the repo → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, pick **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait ~1 minute. Your site goes live at the URL shown on that page.

### Option B — No command line (drag & drop)

1. On github.com, click **New** → name it `birgunj-metro-movement` → **Create repository**.
2. Click **uploading an existing file**.
3. Drag **all the files and the `css`, `js`, `assets` folders** from this project into the page → **Commit changes**.
4. Go to **Settings → Pages** and follow steps 2–4 from Option A.

### Want the short URL `ronitshrivas.github.io`?
Name the repository exactly **`ronitshrivas.github.io`** instead. The site then lives at
`https://ronitshrivas.github.io/` (root, no subfolder).

---

## ✏️ What to customize

| Where | Change |
|-------|--------|
| **Join buttons** | In `index.html`, the two links in the `#join` section use `href="#"`. Replace with your Facebook page, Google Form, or WhatsApp link. |
| **Colors** | In `css/style.css`, edit the `:root` variables (`--saffron`, `--amber`, `--ink`). |
| **Demands** | Edit the `<article class="demand">` blocks in `index.html` to add/remove points. |
| **Stats** | In the `.stats` section, change `data-count` / `data-suffix` values. |
| **Logo** | `assets/logo.svg` is editable text — tweak colors or shapes in any editor. |

---

## 📝 Notes on the content

The demands shown (education, employment, sports infrastructure, economic justice,
public services) are drawn from the movement's own drafted points. A few figures cited
in the stats strip (customs contribution, SEZ land, corridor industries) are from public
reporting — verify current numbers before using them in official/printed material.

---

*Made for the people of Birgunj. Use it, share it, improve it.*
