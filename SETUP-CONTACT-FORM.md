# Contact Form (Nodemailer) + Deployment Setup

This adds a real backend (`/server`) so the portfolio's contact form actually
emails Bello Riliwan, and configures the frontend so URL-based routes
(e.g. `/projects/survey-to-insight-engine`) work correctly once deployed.

## 1. Get a Gmail App Password

1. Go to your Google Account → Security.
2. Turn on **2-Step Verification** (required for App Passwords).
3. Go to https://myaccount.google.com/apppasswords
4. Create an app password named "Portfolio Contact Form".
5. Copy the 16-character password — you'll use it below.

## 2. Set up the backend

```bash
cd server
npm install
cp .env.example .env
```

Edit `server/.env`:
```
EMAIL_USER=belloriliwan001@gmail.com
EMAIL_PASS=<the 16-character app password>
CLIENT_ORIGIN=http://localhost:5173
PORT=5000
```

Run it:
```bash
npm run dev
```

You should see `Contact API running on port 5000`. Test it:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Hello","message":"Testing the API"}'
```
Check the inbox for a new email.

## 3. Set up the frontend

At the project root:
```bash
npm install
cp .env.example .env
```

`.env` should have:
```
VITE_API_URL=http://localhost:5000
```

Run it:
```bash
npm run dev
```

Fill out the contact form on the site — it should now hit your local backend
and send a real email instead of Formspree.

## 4. Deploy the backend (Render)

1. Push the `server/` folder to a GitHub repo (can be the same repo, Render
   lets you set a root directory).
2. On Render: New → Web Service → connect the repo.
3. Root directory: `server`
4. Build command: `npm install`
5. Start command: `npm start`
6. Add environment variables in Render's dashboard: `EMAIL_USER`, `EMAIL_PASS`,
   `CLIENT_ORIGIN` (set this to your Vercel URL once you have it), `PORT` is
   set automatically by Render.
7. Deploy. Note the live URL, e.g. `https://bello-portfolio-api.onrender.com`.

## 5. Deploy the frontend (Vercel)

1. Push the frontend to GitHub (or reuse the same repo — Vercel can be
   pointed at the root while Render points at `/server`).
2. On Vercel: New Project → import the repo.
3. Framework preset: Vite (auto-detected).
4. Add environment variable: `VITE_API_URL` = your Render URL from step 4.
5. Deploy.

The included `vercel.json` rewrite makes sure deep links like
`/projects/survey-to-insight-engine` load correctly on refresh, since
`BrowserRouter` needs the server to fall back to `index.html`.

## 6. Point a real domain at it (optional)

1. In Vercel: Project → Settings → Domains → add your domain
   (e.g. `belloriliwan.dev`).
2. At your domain registrar, add the DNS records Vercel gives you
   (usually an `A` record to `76.76.21.21` and/or a `CNAME` for `www`).
3. Once DNS propagates, the portfolio and all its project routes will be
   live under the real domain instead of a `*.vercel.app` URL.

## 7. Go back and tighten CORS

Once both are deployed, update `CLIENT_ORIGIN` in Render to your **final**
domain (not the `*.vercel.app` preview URL) so only your real site can call
the contact API.
