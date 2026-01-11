# Ziki Code Breaker - Backend API

Secure proxy server for JDoodle Compiler API. Deploy to **Render**.

## Quick Start (Local Development)

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your JDoodle credentials
npm run dev
```

## Deploy to Render

### Step 1: Create Web Service
1. Go to [render.com](https://render.com) → New → Web Service
2. Connect your GitHub repository
3. Configure:
   - **Name**: `ziki-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 2: Environment Variables
Add these in Render dashboard → Environment:

| Variable | Value |
|----------|-------|
| `JDOODLE_CLIENT_ID` | Your JDoodle Client ID |
| `JDOODLE_CLIENT_SECRET` | Your JDoodle Client Secret |
| `FRONTEND_URL` | `https://your-app.vercel.app` |
| `NODE_ENV` | `production` |

### Step 3: Get JDoodle Credentials
1. Sign up at [jdoodle.com](https://www.jdoodle.com/compiler-api)
2. Go to My Account → API Credentials
3. Copy Client ID and Client Secret

## API Endpoints

### Health Check
```
GET /health
```
Response: `{ "status": "ok", "timestamp": "...", "service": "ziki-backend" }`

### Run Code
```
POST /api/run
Content-Type: application/json

{
  "language": "c" | "cpp",
  "code": "source code here",
  "input": "stdin input (optional)"
}
```

Response:
```json
{
  "output": "program output",
  "error": "compilation errors (if any)",
  "cpuTime": "0.01s",
  "memory": "1234 KB"
}
```

## Supported Languages

| Language | Compiler |
|----------|----------|
| C | GCC 11.1.0 |
| C++ | GCC 11.1.0 (C++17) |

## Security Features

- ✅ CORS restricted to frontend domain
- ✅ Rate limiting (100 req/15min per IP)
- ✅ Helmet security headers
- ✅ Input validation & size limits
- ✅ No API keys exposed to frontend

## Frontend Configuration

After deploying, update the frontend to point to your Render URL:

**Option 1: Environment Variable (Recommended)**
In Vercel dashboard → Settings → Environment Variables:
```
VITE_API_URL=https://ziki-backend.onrender.com
```

**Option 2: Direct Edit**
Update `src/config/api.ts`:
```typescript
BASE_URL: 'https://ziki-backend.onrender.com'
```

## Troubleshooting

**Backend not responding?**
- Check Render logs for errors
- Verify environment variables are set
- Test `/health` endpoint directly

**CORS errors?**
- Ensure `FRONTEND_URL` matches your Vercel domain exactly
- Include protocol (https://)

**Compilation fails?**
- Verify JDoodle credentials are correct
- Check JDoodle API quota (200 free credits/day)
