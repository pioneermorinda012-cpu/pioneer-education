# 🎓 Pioneer Education — Learning Platform

A complete language learning platform for IELTS, Spoken English, German A1, and PTE Academic.
Built with Next.js — ready to deploy on Vercel in minutes.

---

## ✨ Features

- **4 courses**: IELTS, Spoken English, German A1, PTE Academic
- **Lesson tracking**: progress bars, locked/unlocked lessons, completion status
- **AI vocabulary builder**: generates advanced words with Punjabi meanings
- **AI writing feedback**: IELTS Task 1 & 2 with band score estimates
- **Mock exam launcher**: ready to extend with full question banks
- **Student dashboard**: streaks, stats, and quick practice shortcuts

---

## 🚀 Deploy on Vercel (Step by step)

### Step 1 — Install Node.js
Download from https://nodejs.org (choose LTS version)

### Step 2 — Upload to GitHub
1. Go to https://github.com and create a new repository named `pioneer-education`
2. Upload all files from this folder to the repository

### Step 3 — Deploy to Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click **"New Project"** → select your `pioneer-education` repo
3. Click **Deploy** — Vercel will build it automatically

### Step 4 — Add your Anthropic API key
1. In Vercel dashboard → your project → **Settings** → **Environment Variables**
2. Add:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: your key from https://console.anthropic.com
3. Click **Save** → then go to **Deployments** → **Redeploy**

### Step 5 — Your app is live! 🎉
Vercel gives you a free URL like: `pioneer-education.vercel.app`

---

## 📁 File structure

```
pioneer-education/
├── pages/
│   ├── index.js          ← Home dashboard
│   ├── lessons.js        ← Lesson browser
│   ├── practice.js       ← Writing/speaking practice
│   ├── vocabulary.js     ← AI vocabulary builder
│   ├── exams.js          ← Mock exam launcher
│   └── api/
│       ├── vocabulary.js ← AI word generation
│       └── feedback.js   ← IELTS writing feedback
├── components/
│   └── Layout.js         ← Header + navigation
├── lib/
│   └── data.js           ← All course and lesson data
├── styles/
│   └── globals.css       ← All styles
└── package.json
```

---

## 🛠️ Customising your content

### Add or edit lessons
Open `lib/data.js` and edit the `COURSES` array.
Each lesson has: `id`, `title`, `sub`, `done` (true/false), `active` (true/false)

### Change course colors
In `lib/data.js`, each course has a `color` field: `blue`, `teal`, `amber`, or `purple`

### Add your own voucher/login system
Connect your existing Vercel login system by adding auth checks in `components/Layout.js`

---

## 💡 What to add next

1. **Student login** — connect to your existing voucher system
2. **Supabase database** — save real progress per student
3. **More lessons** — add lesson content pages at `/pages/lesson/[course]/[id].js`
4. **WhatsApp integration** — add your existing WhatsApp button to Layout.js
5. **Audio** — add pronunciation audio to vocabulary cards

---

## 📞 Support
Built by Claude for Pioneer Education, Morinda, Punjab.
For help: https://claude.ai
