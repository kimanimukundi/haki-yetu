# 🚀 Deploy Haki Yetu Online (Free)

This guide deploys your app to **Render.com** — free, no credit card needed for basic hosting.

---

## Step 1 — Push code to GitHub

You need a GitHub account. Sign up free at https://github.com if you don't have one.

### First time setup (do this once):
Download and install Git from https://git-scm.com/downloads

Then in your terminal, inside the `haki-yetu` folder:

```bash
git init
git add .
git commit -m "Initial commit — Haki Yetu civic education platform"
```

### Create a GitHub repo:
1. Go to https://github.com/new
2. Name it `haki-yetu`
3. Set it to **Public**
4. Click **Create repository**
5. Copy the commands GitHub shows you under "push an existing repository" — they look like:

```bash
git remote add origin https://github.com/YOUR-USERNAME/haki-yetu.git
git branch -M main
git push -u origin main
```

Run those in your terminal. Your code is now on GitHub!

---

## Step 2 — Deploy on Render

1. Go to **https://render.com** and sign up (use your GitHub account)
2. Click **"New +"** → **"Web Service"**
3. Click **"Connect a repository"** and select `haki-yetu`
4. Render will auto-detect the settings from `render.yaml`. Confirm:
   - **Name:** haki-yetu
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
5. Click **"Advanced"** → **"Add Environment Variable"**
   - Key: `GEMINI_API_KEY`
   - Value: *(paste your Gemini API key)*
6. Click **"Create Web Service"**

Render will build and deploy your app. Takes about 2 minutes.

---

## Step 3 — Your app is live! 🎉

Render gives you a free URL like:
```
https://haki-yetu.onrender.com
```

Share this link with anyone in Kenya — it works on any phone or computer!

---

## Updating the app later

Whenever you make changes locally, just run:
```bash
git add .
git commit -m "describe your changes"
git push
```

Render automatically redeploys within 2 minutes. 

---

## ⚠️ Free tier notes

- The free Render plan **sleeps after 15 minutes of inactivity**
- First visit after sleep takes ~30 seconds to wake up
- To keep it always-on, upgrade to Render's Starter plan ($7/month)
- Alternatively, use **Railway.app** (also free, similar setup)

---

## Custom domain (optional)

Want `hakiyetu.co.ke` instead of `haki-yetu.onrender.com`?
1. Buy a `.co.ke` domain from **Kenya Network Information Centre** at https://kenic.or.ke (~KSh 1,000/year)
2. In Render dashboard → Settings → Custom Domains → add your domain
3. Follow the DNS instructions Render gives you

