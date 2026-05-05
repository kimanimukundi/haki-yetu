# 🌿 Haki Yetu — Your Rights
### Kenya Civic Education AI Platform

An AI-powered platform teaching Kenyans their civil rights through interactive conversation, grounded in the **Constitution of Kenya 2010**.

---

## ✨ Features

- 💬 **AI Chat** — Ask any question about your rights in Kenya
- 🧠 **Quiz Mode** — Test your civic knowledge with Constitution-based questions  
- 🛡️ **Scenario Cards** — Real-life situations (arrest, hospital, voting, land disputes)
- 🌍 **Swahili / English toggle** — Full language switching in the UI and AI responses
- 📶 **Offline Mode** — Works without internet using a built-in knowledge base (PWA)

---

## 🚀 Run Locally (3 steps)

### Prerequisites
- Node.js 18+ installed → https://nodejs.org/

### 1. Install dependencies
```bash
cd haki-yetu
npm install
```

### 2. Add your Gemini API key
```bash
cp .env.example .env
```
Open `.env` and paste your key. Get a **free** key at:
👉 https://aistudio.google.com/app/apikey (no credit card needed)

### 3. Start the server
```bash
npm start
```

Open → **http://localhost:3000**

---

## 💻 Development mode (auto-restart)
```bash
npm run dev
```

---

## 📱 Install as App (PWA)
Once running at localhost:3000, open Chrome and click **"Install"** in the address bar.
This installs it as a desktop/mobile app with offline support.

---

## 📁 Project Structure
```
haki-yetu/
├── server.js            # Express server + Gemini API
├── package.json
├── .env                 # Your API key (never commit this)
├── .env.example
├── .gitignore
└── public/
    ├── index.html       # Full frontend (chat, quiz, scenarios)
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
- [ ] Deploy to Render / Railway (free hosting)
- [ ] More quiz questions per topic
- [ ] Mobile app (React Native / Flutter)
- [ ] Voice input for accessibility

---

## ⚖️ Disclaimer
Educational information only. For legal advice, consult a qualified Kenyan advocate.

---

Built with ❤️ for Kenya · Powered by Google Gemini AI
