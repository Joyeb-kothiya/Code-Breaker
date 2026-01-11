# Ziki Code Breaker 🚀

A modern, interactive web platform designed to help students and developers **learn, practice, and master C++ and DFS concepts** through a well-organized academic program library with a **live online compiler**.

---

## ✨ Features

- 📚 **Academic Program Library**
  - Semester-wise and unit-wise organization
  - Clean and readable C++ / DFS programs
  - Perfect for exam prep and concept revision

- ⚡ **Live Online Compiler**
  - Compile and run C/C++ code directly in browser
  - Custom stdin input support
  - Execution time and memory stats
  - Powered by JDoodle API (secure backend proxy)

- 🎨 **Modern Frontend**
  - Built with **Vite + React + TypeScript**
  - Dark-themed professional UI
  - Responsive across devices

- 🧠 **Student-Friendly**
  - Easy navigation
  - Minimal distractions
  - Focused on learning and logic building

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | React + TypeScript + Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | Node.js + Express |
| Compiler API | JDoodle |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

---

## 📁 Project Structure

```
/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/              # Route pages
│   ├── services/           # API services
│   ├── config/             # Configuration
│   └── assets/             # Static assets
│
├── backend/                # Backend source code
│   ├── server.js           # Express app
│   ├── routes/             # API routes
│   ├── controllers/        # Route handlers
│   ├── services/           # JDoodle integration
│   └── utils/              # Validators
│
└── README.md
```

---

## 🚀 Deployment Guide

### Step 1: Deploy Backend to Render

1. Go to [render.com](https://render.com) → New → Web Service
2. Connect your GitHub repository
3. Configure:
   - **Name**: `ziki-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add environment variables:
   - `JDOODLE_CLIENT_ID` - Get from [jdoodle.com](https://www.jdoodle.com/compiler-api)
   - `JDOODLE_CLIENT_SECRET` - Get from JDoodle
   - `FRONTEND_URL` - Your Vercel URL (e.g., `https://ziki.vercel.app`)
   - `NODE_ENV` - `production`
5. Deploy and copy your Render URL (e.g., `https://ziki-backend.onrender.com`)

### Step 2: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repository
3. Keep default settings (Vite auto-detected)
4. Add environment variable:
   - `VITE_API_URL` = Your Render backend URL
5. Click **Deploy** 🎉

### Step 3: Update CORS (if needed)

In Render dashboard, update `FRONTEND_URL` to match your Vercel domain.

---

## 🧪 Local Development

### Frontend
```bash
npm install
npm run dev
```
Visit: `http://localhost:5173`

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your JDoodle credentials
npm run dev
```
Backend runs on: `http://localhost:3001`

---

## 🔧 Configuration

### Frontend API Config
Update `src/config/api.ts` or set `VITE_API_URL` environment variable:

```typescript
BASE_URL: import.meta.env.VITE_API_URL || 'https://your-backend.onrender.com'
```

### Backend Environment
See `backend/.env.example` for required variables.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Backend health check |
| POST | `/api/run` | Compile and run code |

### Run Code Request
```json
{
  "language": "c" | "cpp",
  "code": "source code",
  "input": "stdin (optional)"
}
```

### Response
```json
{
  "output": "program output",
  "error": "errors if any",
  "cpuTime": "0.01s",
  "memory": "1234 KB"
}
```

---

## 🛡️ Security

- ✅ API keys stored in backend only
- ✅ CORS restricted to frontend domain
- ✅ Rate limiting enabled
- ✅ Input validation and size limits
- ✅ Helmet security headers

---

## 📜 License

This project is open-source and free to use for **learning and educational purposes**.

---

## 👤 Author

**Ziki**

Crafted with passion for clean code and better learning ✨
