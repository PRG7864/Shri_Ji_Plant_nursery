# 🌿 GREENYCUP — Shri Ji Plant Nursery
### *Bring Life Home — Next-Generation Botanical E-Commerce Platform*

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://greenycup-nursery.vercel.app)
[![React](https://img.shields.io/badge/React_18-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

---

## 📖 Overview

**GREENYCUP** is a modern, full-stack botanical e-commerce application designed for plant lovers, urban gardeners, and home decorators. Built with a bespoke earthy aesthetic, it delivers a seamless end-to-end shopping journey — from interactive plant match quizzes and detailed botanical care guides to instant order processing and an all-in-one administrative analytics dashboard.

---

## ✨ Key Features

### 🛍️ Customer Experience
- **🌾 Curated Botanical Catalog**: 40+ pre-seeded plant species categorized into *Indoor Plants, Outdoor & Palms, Succulents & Cacti, Air Purifiers, Ceramic Planters, Organic Soil & Care*.
- **🔍 Multi-Facet Filter & Search**: Real-time filtering by Light Level (Low/Indirect/Direct), Pet-Friendliness, Care Difficulty (Beginner/Intermediate/Expert), Price Range, and Sorting.
- **🪴 Interactive Plant Match Quiz**: 5-step dynamic questionnaire calculating personalized plant recommendations tailored to room lighting, routine, and pet safety.
- **📖 Botanical Care Guides**: Detailed watering cycles, sunlight requirements, humidity levels, and seasonal care advice on every plant page.
- **🛒 Smart Cart & Checkout**:
  - Slide-out cart drawer & dedicated cart view.
  - Promo code discounts (`GREEN10`, `PLANTLOVE`).
  - Seamless multi-step checkout with address validation and instant order generation.
- **📋 Plant Care Journal**: Personal plant parent companion to track watering and misting schedules.
- **❤️ Wishlist & Order History**: Saved favorites with one-click cart transfer and real-time tracking for previous purchases.
- **🔐 JWT Authentication**: Secure user registration, login, profile updating, and role-based access.

---

### 👑 Admin Management Suite
- **📊 KPI Overview & Analytics**: Live revenue charts, monthly sales, order volume tracking, and inventory counts.
- **📦 Product Inventory Management**: Add, update, delete products with high-resolution image URLs, dimensions, and stock counts.
- **🚚 Order Management Workflow**: Real-time order status transitions (`Pending` ➔ `Processing` ➔ `Shipped` ➔ `Delivered`).
- **👥 Customer Directory**: View registered users, contact information, and purchasing history.

---

## 🏗️ Tech Stack & Architecture

### **Frontend**
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS & Tailwind CSS with custom botanical design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **State Management**: React Context API (`AuthContext`, `CartContext`, `WishlistContext`, `ToastContext`)

### **Backend**
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) *(with automated In-Memory Mongo fallback & auto-seeding)*
- **Security**: JWT (JSON Web Tokens), BCrypt.js password hashing, CORS protection

---

## 📁 Project Structure

```
Shri Ji Nursery/
├── client/                     # React Frontend Application (Vite)
│   ├── public/                 # Static assets & favicon
│   ├── src/
│   │   ├── assets/             # Brand logos & background illustrations
│   │   ├── components/         # Modular UI components
│   │   │   ├── cart/           # CartDrawer, CartItem
│   │   │   ├── common/         # Navbar, Footer, Toast, Modal
│   │   │   ├── home/           # HeroBanner, CategoriesGrid, QuizTeaser
│   │   │   ├── product/        # ProductCard, ReviewSection, CareGuide
│   │   │   └── shop/           # FilterSidebar, SortBar, SearchModal
│   │   ├── context/            # Global state contexts (Auth, Cart, Wishlist)
│   │   ├── pages/              # 16 Full Page views (Home, Shop, Admin, Quiz...)
│   │   ├── services/           # Axios / Fetch API client layer
│   │   ├── App.jsx             # Main router & provider wrapper
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global typography & botanical color tokens
│   └── package.json
│
├── server/                     # Express.js REST API Backend
│   ├── config/                 # DB connection & environment setup
│   ├── controllers/            # Business logic (Auth, Products, Orders, Admin)
│   ├── middleware/             # Auth JWT guard, Role check, Error handlers
│   ├── models/                 # Mongoose schemas (User, Product, Order, Review, Category)
│   ├── routes/                 # Express API routes (/api/products, /api/auth...)
│   ├── seed/                   # 40+ botanical products & initial demo datasets
│   ├── server.js               # Express application entry point
│   └── package.json
│
├── DEPLOYMENT.md               # Production deployment walkthrough
├── vercel.json                 # Vercel deployment configuration
├── render.yaml                 # Render Infrastructure-as-Code blueprint
└── package.json                # Root monorepo automation scripts
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js (v18.0 or later)
- Git

### 2. Clone the Repository
```bash
git clone https://github.com/PRG7864/Shri_Ji_Plant_nursery.git
cd Shri_Ji_Plant_nursery
```

### 3. Install All Dependencies
```bash
npm run install:all
```

### 4. Configure Environment Variables
Create `.env` in the `server/` directory:
```env
PORT=5001
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_2026
# Optional: Provide MongoDB URI or omit to use auto in-memory mongo
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/greenycup
```

### 5. Run Both Server & Client Concurrently
```bash
npm run dev
```
- **Frontend App**: `http://localhost:5173`
- **Backend API**: `http://localhost:5001/api`

---

## 🔑 Demo Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@greenycup.com` | `admin123` |
| **Customer** | `customer@greenycup.com` | `customer123` |

---

## 🌐 API Reference Overview

| Endpoint | Method | Description | Access |
| :--- | :--- | :--- | :--- |
| `/api/auth/register` | `POST` | Register a new user account | Public |
| `/api/auth/login` | `POST` | Authenticate and obtain JWT token | Public |
| `/api/products` | `GET` | Get all products with filters & pagination | Public |
| `/api/products/:id` | `GET` | Get detailed product profile & care guide | Public |
| `/api/quiz/recommend` | `POST` | Get personalized plant recommendations | Public |
| `/api/orders` | `POST` | Place a new plant order | Private |
| `/api/orders/my-orders`| `GET` | Retrieve logged-in user order history | Private |
| `/api/admin/stats` | `GET` | Fetch admin KPI summary & revenue data | Admin |
| `/api/admin/orders` | `GET / PUT` | Manage and update order shipping statuses | Admin |
| `/api/health` | `GET` | System health check & uptime endpoint | Public |

---

## ☁️ Deployment

- **Frontend on Vercel**: Live at [greenycup-nursery.vercel.app](https://greenycup-nursery.vercel.app)
- **Backend on Render**: Ready for 1-click deployment with [`render.yaml`](./render.yaml).

For complete deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 📄 License
This project is licensed under the **MIT License**.
