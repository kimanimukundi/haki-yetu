# 🌿 Haki Yetu — Your Rights
<<<<<<< HEAD
### Kenya Civic Education AI Platform

An AI-powered platform teaching Kenyans their civil rights through interactive conversation, grounded in the **Constitution of Kenya 2010**.
=======
### Kenya Civic Education Platform

A platform dedicated to teaching Kenyans their civil rights through interactive conversation, grounded in the **Constitution of Kenya 2010**.
>>>>>>> 53d7cdf2e816a1071f37a31d1573cfe714c12171

---

## ✨ Features

- 💬 **AI Chat** — Ask any question about your rights in Kenya
<<<<<<< HEAD
- 🧠 **Quiz Mode** — Test your civic knowledge with Constitution-based questions  
- 🛡️ **Scenario Cards** — Real-life situations (arrest, hospital, voting, land disputes)
- 🌍 **Swahili / English toggle** — Full language switching in the UI and AI responses
=======
- 🧠 **Quiz Mode** — Test your civic knowledge with Constitution-based questions
- 🛡️ **Scenario Cards** — Real-life situations (arrest, hospital, voting, land disputes)
- 🌍 **Swahili / English toggle** — Full language switching throughout the platform
- 📋 **Legal Aid Directory** — Free legal help and rights bodies across Kenya, searchable by county
- 📤 **WhatsApp Sharing** — Share rights information directly with friends and family
>>>>>>> 53d7cdf2e816a1071f37a31d1573cfe714c12171
- 📶 **Offline Mode** — Works without internet using a built-in knowledge base (PWA)

---

<<<<<<< HEAD
## 🚀 Run Locally (3 steps)

### Prerequisites
- Node.js 18+ installed → https://nodejs.org/
=======
## 🚀 Run Locally

### Prerequisites
- Node.js 18+ → https://nodejs.org/
>>>>>>> 53d7cdf2e816a1071f37a31d1573cfe714c12171

### 1. Install dependencies
```bash
cd haki-yetu
npm install
```

<<<<<<< HEAD
### 2. Add your Gemini API key
```bash
cp .env.example .env
```
Open `.env` and paste your key. Get a **free** key at:
👉 https://aistudio.google.com/app/apikey (no credit card needed)

### 3. Start the server
=======
### 2. Set up environment
```bash
cp .env.example .env
```
Open `.env` and add your Gemini API key from https://aistudio.google.com/app/apikey

### 3. Start
>>>>>>> 53d7cdf2e816a1071f37a31d1573cfe714c12171
```bash
npm start
```

Open → **http://localhost:3000**

---

<<<<<<< HEAD
## 💻 Development mode (auto-restart)
=======
## 💻 Development
>>>>>>> 53d7cdf2e816a1071f37a31d1573cfe714c12171
```bash
npm run dev
```

---

## 📱 Install as App (PWA)
<<<<<<< HEAD
Once running at localhost:3000, open Chrome and click **"Install"** in the address bar.
This installs it as a desktop/mobile app with offline support.
=======
Open `http://localhost:3000` in Chrome and click **"Install"** in the address bar.
>>>>>>> 53d7cdf2e816a1071f37a31d1573cfe714c12171

---

## 📁 Project Structure
```
haki-yetu/
<<<<<<< HEAD
├── server.js            # Express server + Gemini API
├── package.json
├── .env                 # Your API key (never commit this)
├── .env.example
├── .gitignore
└── public/
    ├── index.html       # Full frontend (chat, quiz, scenarios)
=======
├── server.js            # Express server
├── package.json
├── .env                 # API key (never commit this)
├── .env.example
└── public/
    ├── index.html       # Frontend
>>>>>>> 53d7cdf2e816a1071f37a31d1573cfe714c12171
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
<<<<<<< HEAD
- [ ] Deploy to Render / Railway (free hosting)
- [ ] More quiz questions per topic
- [ ] Mobile app (React Native / Flutter)
- [ ] Voice input for accessibility
=======
- [x] Legal aid directory
- [x] WhatsApp sharing
- [ ] More local languages (Kikuyu, Luo, Kamba)
- [ ] Voice input for accessibility
- [ ] Teacher mode & printable rights cards
- [ ] Mobile app
>>>>>>> 53d7cdf2e816a1071f37a31d1573cfe714c12171

---

## ⚖️ Disclaimer
Educational information only. For legal advice, consult a qualified Kenyan advocate.
<<<<<<< HEAD

---

Built with ❤️ for Kenya · Powered by Google Gemini AI
=======
>>>>>>> 53d7cdf2e816a1071f37a31d1573cfe714c12171
