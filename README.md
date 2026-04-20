# Badger Automation Group

Marketing site for **Badger Automation Group** — a **Vaccaro Ventures LLC** company providing AI automation consulting and local SEO for businesses in **Milwaukee** and **seven southeastern Wisconsin counties** (Milwaukee, Waukesha, Racine, Kenosha, Ozaukee, Washington, Walworth). Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), deployed on [Netlify](https://www.netlify.com/) with [Netlify Forms](https://docs.netlify.com/forms/setup/).

**Canonical domain in code:** `https://badgerautomationgroup.com` — update `astro.config.mjs` and `src/data/site.ts` if you move to a different primary URL.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

If `astro build` fails in a restricted environment trying to write telemetry config, run:

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

Netlify sets `ASTRO_TELEMETRY_DISABLED=1` in `netlify.toml` for this reason.

## Deploy (GitHub → Netlify)

1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site** → **Import an existing project** → pick the repo.
3. Build settings: **Build command** `npm run build`, **Publish directory** `dist`.
4. After the first deploy, open **Site configuration → Forms** and confirm forms were detected. Set notification email to `thomas@vaccaromarketing.digital` (or your preferred inbox).
5. **Domain**: connect **badgerautomationgroup.com** (or your domain) under **Domain management** and follow DNS instructions from your registrar.

## Forms

Each lead form posts to Netlify Forms with `action="/thank-you/"`. Test submissions after deploy in the Netlify dashboard.

## Local SEO / NAP (match Google Business Profile)

Copy `.env.example` to `.env` and set `PUBLIC_NAP_*` and optional map/social URLs. Published **name, address, phone, hours, geo coordinates, and JSON-LD** should match your GBP exactly.

## License

Private project — all rights reserved.
