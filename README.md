# 🌿 Haki Yetu — Your Rights
### Kenya Civic Education Platform

A platform dedicated to teaching Kenyans their civil rights through interactive conversation, grounded in the **Constitution of Kenya 2010**.

---

## ✨ Features

- 💬 **AI Chat** — Ask any question about your rights in Kenya
- 🧠 **Quiz Mode** — Test your civic knowledge with Constitution-based questions
- 🛡️ **Scenario Cards** — Real-life situations (arrest, hospital, voting, land disputes)
- 🌍 **Swahili / English toggle** — Full language switching throughout the platform
- 📋 **Legal Aid Directory** — Free legal help and rights bodies across Kenya, searchable by county
- 📤 **WhatsApp Sharing** — Share rights information directly with friends and family
- 📶 **Offline Mode** — Works without internet using a built-in knowledge base (PWA)

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ → https://nodejs.org/

### 1. Install dependencies
```bash
cd haki-yetu
npm install
```

### 2. Set up environment
```bash
cp .env.example .env
```
Open `.env` and add your Gemini API key from https://aistudio.google.com/app/apikey

### 3. Start
```bash
npm start
```

Open → **http://localhost:3000**

---

## 💻 Development
```bash
npm run dev
```

---

## 📱 Install as App (PWA)
Open `http://localhost:3000` in Chrome and click **"Install"** in the address bar.

---

## 📁 Project Structure
```
haki-yetu/
├── server.js            # Express server
├── package.json
├── .env                 # API key (never commit this)
├── .env.example
└── public/
    ├── index.html       # Frontend
    ├── manifest.json    # PWA manifest
    └── sw.js            # Service worker (offline support)
```

---

## 🗺 Roadmap
- [x] AI Chat about rights
- [x] Swahili / English toggle
- [x] Quiz mode
- [x] Scenario cards
- [x] Offline PWA mode
- [x] Legal aid directory
- [x] WhatsApp sharing
- [ ] More local languages (Kikuyu, Luo, Kamba)
- [ ] Voice input for accessibility
- [ ] Teacher mode & printable rights cards
- [ ] Mobile app

---

## ⚖️ Disclaimer
Educational information only. For legal advice, consult a qualified Kenyan advocate.
