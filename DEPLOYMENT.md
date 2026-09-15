# 🌿 GREENYCUP — Deployment Guide (Vercel & Render)

This guide walks you through deploying the **GreenyCup** Full-Stack Botanical E-Commerce platform to **Render** and **Vercel**.

---

## 🌟 Option 1: Full-Stack on Render (Recommended — 1 Web Service)

Deploy the entire full-stack app (React frontend + Express backend + Auto-seeding database) in a single service with zero CORS hassles.

### Steps:
1. Push your code to GitHub / GitLab.
2. Log into [Render.com](https://render.com).
3. Click **New +** → **Web Service**.
4. Connect your GitHub repository.
5. Configure the settings:
   - **Name**: `greenycup-nursery`
   - **Environment**: `Node`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
6. Under **Environment Variables**, add:
   - `NODE_ENV`: `production`
   - `JWT_SECRET`: *(Generate any random string, e.g. `greenycup_super_secure_secret_2026`)*
   - `MONGODB_URI`: *(Optional: Your MongoDB Atlas connection string. If omitted, GreenyCup automatically runs with in-memory Mongo & self-seeds the 40+ products!)*
7. Click **Deploy Web Service**!

---

## ⚡ Option 2: Frontend on Vercel + Backend on Render

If you prefer deploying the React client on **Vercel** with global CDN edge performance:

### Step A: Deploy Backend on Render
1. In Render, create a **Web Service** with:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment Variables**:
     - `NODE_ENV`: `production`
     - `JWT_SECRET`: `greenycup_jwt_secret_2026`
     - `MONGODB_URI`: *(Your MongoDB Atlas URI or leave for auto-fallback)*
2. Note down your backend URL (e.g., `https://greenycup-api.onrender.com`).

### Step B: Deploy Frontend on Vercel
1. Log into [Vercel.com](https://vercel.com).
2. Click **Add New...** → **Project** and import your repository.
3. In Project Settings:
   - **Root Directory**: Select `client` (or leave root since `vercel.json` is configured).
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Under **Environment Variables**, add:
   - `VITE_API_BASE_URL`: `https://greenycup-api.onrender.com/api` *(Your Render backend URL + `/api`)*
5. Click **Deploy**!

---

## 📋 Environment Variables Summary

| Variable | Required | Description | Example |
| :--- | :--- | :--- | :--- |
| `NODE_ENV` | Yes (Server) | Sets environment mode | `production` |
| `PORT` | Auto on Render | Server port | `10000` or `5001` |
| `JWT_SECRET` | Yes (Server) | Secret for JWT token generation | `greenycup_secret_key_2026` |
| `MONGODB_URI` | Optional (Server) | MongoDB Atlas connection string | `mongodb+srv://...` |
| `VITE_API_BASE_URL` | Optional (Vercel) | Custom backend endpoint if hosted separately | `https://greenycup-api.onrender.com/api` |

---

## 🛠️ Testing Locally in Production Mode

To test how the app runs in production before deploying:

```bash
npm run build
npm start
```
Open [http://localhost:5001](http://localhost:5001) in your browser.
