# Landing Starter — Next.js + TinaCMS + Stripe Payment Link

A one-page site your non-technical teammates can edit at `/admin`, hosted free on Vercel.
Content lives in `content/pages/home.json` in the repo — every edit is a Git commit, so
there's full history and one-click rollback.

## How the pieces fit

- **Next.js** renders the page from `content/pages/home.json`.
- **TinaCMS** provides the editing UI at `/admin/index.html`. Editors click text on the
  live page and change it; publishing commits to GitHub, which triggers a Vercel rebuild.
- **Stripe Payment Link** powers checkout. The buy buttons just link to a URL you paste
  into the CMS — no payment code in this repo at all.

## 1. Run it locally

```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- Editor: http://localhost:3000/admin/index.html

Locally, Tina runs in "local mode" — no account needed, edits write straight to
`content/pages/home.json`. The first `npm run dev` also generates `tina/__generated__/`
(the typed client that `app/page.tsx` imports), so expect that folder to appear.

## 2. Create your Stripe Payment Link

1. In the Stripe dashboard: **Payment Links → New** (works in test mode too).
2. Add your product and price, create the link, copy the `https://buy.stripe.com/...` URL.
3. Open the editor, click the buy button, and paste the URL into
   **Stripe Payment Link URL**. Done — both buy buttons use it.

## 3. Deploy to Vercel (free)

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New Project → Import** the repo. The defaults work — the build
   command in `package.json` already runs `tinacms build && next build`.

The site will deploy, but `/admin` won't accept logins yet — that needs Tina Cloud.

## 4. Connect Tina Cloud so editors can log in (free tier)

1. Sign up at https://app.tina.io and create a project pointing at your GitHub repo.
2. Copy the **Client ID** and create a **read-only token**.
3. In Vercel → Project → Settings → Environment Variables, add:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` = your Client ID
   - `TINA_TOKEN` = your token
4. Redeploy.

Now anyone you invite in the Tina Cloud dashboard can go to
`https://yoursite.com/admin/index.html`, log in, and edit. Publishing commits to the
repo and Vercel rebuilds automatically (usually live in ~1 minute).

## Everyday editing (for your teammates)

1. Go to `yoursite.com/admin/index.html` and log in.
2. Click any text on the page preview, or use the form on the left.
3. Hit **Save**. The change goes live after the automatic rebuild.

## Changing the design

- Colors, fonts, spacing: `app/globals.css` (all tokens at the top).
- Layout/sections: `components/LandingPage.tsx`.
- Which fields editors see: `tina/config.ts` — add a field there, use it in the
  component, and it shows up in the editor.

## Costs

- Vercel Hobby: $0
- Tina Cloud free tier: $0 (2 editor seats at last check — verify on tina.io)
- Stripe: no monthly fee; standard per-transaction processing
- Domain: ~$10–15/year

## Alternative: deploy to GitHub Pages (also free)

The repo includes `.github/workflows/deploy.yml`, which builds a static export and
publishes it to Pages on every push to `main` — including the commits Tina makes
when an editor hits Save.

1. Push the repo to GitHub.
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Repo → **Settings → Secrets and variables → Actions**:
   - Variable `NEXT_PUBLIC_TINA_CLIENT_ID` = your Tina Cloud Client ID
   - Secret `TINA_TOKEN` = your Tina Cloud read-only token
   (Skip these until you set up Tina Cloud — the site still deploys; only /admin login waits.)
4. If your site will live at `username.github.io/<repo>` (a "project site"), open
   `.github/workflows/deploy.yml` and set `NEXT_PUBLIC_BASE_PATH: /<repo>`. If it's
   `username.github.io` or a custom domain, leave it alone.
5. Push to `main` (or run the workflow manually from the Actions tab). Your site
   appears at the URL shown in Settings → Pages, editor at `<site>/admin/index.html`.
6. In Tina Cloud, set the project's Site URL to your Pages URL so editor logins
   are allowed from that domain.

Notes: publishes go live after the Action finishes (~1–2 min, a bit slower than
Vercel). Everything stays static — which is fine here, since checkout is a Stripe
Payment Link and needs no server.
# ShepherdingVisits
