# 🎯 Smart Leads Dashboard

<div align="center">

![Smart Leads Dashboard](https://img.shields.io/badge/Smart%20Leads-Dashboard-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker)

A modern, full-stack **Lead Management Dashboard** built with the **MERN stack** and TypeScript. Features JWT authentication, role-based access control, advanced filtering, real-time analytics, CSV export, and Docker support.

[Features](#features) · [Tech Stack](#tech-stack) · [Getting Started](#getting-started) · [API Reference](#api-endpoints) · [Docker Setup](#docker-setup)

</div>

---

## ✨ Features

### 🔐 Authentication
- **JWT Authentication** with secure HTTP-only cookies
- User **Registration & Login**
- **Protected Routes** with persistent login sessions
- Password hashing using **bcrypt**
- Auth state restored on refresh via `/auth/me`

### 📋 Lead Management
- **Create**, **Update**, and **View** leads
- **Delete leads** (Admin only)
- View single lead details
- Full lead lifecycle tracking

### 🔍 Advanced Filtering
- Search by **Name** or **Email** (debounced)
- Filter by **Status** and **Source**
- Sort by **Latest** or **Oldest**
- Combined multi-filter support

### 📊 Dashboard Analytics
- Lead statistics overview
- Source distribution charts (Recharts)
- Recent leads panel
- Role-aware dashboard rendering

### 🛡️ Role-Based Access Control

| Capability           | Admin | Sales User |
|----------------------|:-----:|:----------:|
| View Leads           | ✅    | ✅         |
| Create Leads         | ✅    | ✅         |
| Update Leads         | ✅    | ✅         |
| Delete Leads         | ✅    | ❌         |

### ⚙️ Additional Features
- **CSV Export** for filtered leads
- **Dark Mode** support
- **Responsive design** for all screen sizes
- **React Query** for server state management
- **Redux Toolkit** for client state
- **Zod** schema validation
- **Docker** + Docker Compose support

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js + TypeScript | UI Framework |
| TailwindCSS | Styling |
| Redux Toolkit | Client State Management |
| React Query | Server State & Caching |
| React Hook Form + Zod | Form Handling & Validation |
| Axios | HTTP Client |
| Recharts | Analytics Charts |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express.js | Server Framework |
| TypeScript | Type Safety |
| MongoDB + Mongoose | Database & ODM |
| JWT | Authentication Tokens |
| bcrypt | Password Hashing |

---


---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- npm or yarn
- MongoDB (local or [Atlas](https://www.mongodb.com/cloud/atlas))
- Docker & Docker Compose *(optional)*

### Environment Variables

**Frontend** — create `client/.env`:
```env
VITE_API_URL=http://localhost:3000/api
```

**Backend** — create `server/.env`:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/smart-leads
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:5173
```

### Local Installation

**1. Clone the repository**
```bash
git clone https://github.com/Code-By-Amit/GigFlow.git
cd smart-leads-dashboard
```

**2. Install frontend dependencies**
```bash
cd client
npm install
```

**3. Install backend dependencies**
```bash
cd ../server
npm install
```

**4. Run the project**

Start the backend:
```bash
cd server
npm run dev
```

Start the frontend (in a new terminal):
```bash
cd client
npm run dev
```

The app will be available at **http://localhost:5173**

---

## 🐳 Docker Setup

The easiest way to run the full stack — no manual installs needed.

**Start all services:**
```bash
docker compose up --build
```

**Stop all services:**
```bash
docker compose down
```

### Docker Services

| Service  | URL                         |
|----------|-----------------------------|
| Frontend | http://localhost:5173        |
| Backend  | http://localhost:3000        |
| MongoDB  | mongodb://localhost:27018    |

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| `POST` | `/api/auth/register` | Register a new user       |
| `POST` | `/api/auth/login`    | Login and receive JWT     |
| `GET`  | `/api/auth/me`       | Get current user session  |
| `POST` | `/api/auth/logout`   | Clear session cookie      |

### Leads

| Method   | Endpoint          | Description                          | Auth Required |
|----------|-------------------|--------------------------------------|:-------------:|
| `GET`    | `/api/leads`      | Get all leads (with filters & pagination) | ✅ |
| `GET`    | `/api/leads/:id`  | Get single lead by ID                | ✅ |
| `POST`   | `/api/leads`      | Create a new lead                    | ✅ |
| `PATCH`  | `/api/leads/:id`  | Update an existing lead              | ✅ |
| `DELETE` | `/api/leads/:id`  | Delete a lead *(Admin only)*         | ✅ Admin |
| `GET`    | `/api/leads/stats`| Get dashboard statistics             | ✅ |

### Query Parameters (GET `/api/leads`)

| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| `search`  | string | Search by name or email         |
| `status`  | string | Filter by lead status           |
| `source`  | string | Filter by lead source           |
| `sort`    | string | `latest` or `oldest`            |
| `page`    | number | Page number (default: 1)        |
| `limit`   | number | Records per page (default: 10)  |

---

## 📤 CSV Export

Export your currently filtered leads directly to a `.csv` file. The export respects all active filters (search, status, source), so you always get exactly the data you're viewing.

---

## 🔑 Authentication Flow

```
1. User submits login credentials
2. Server validates and generates a JWT
3. Token is stored in an HTTP-only cookie (XSS-safe)
4. On page refresh, /auth/me restores the session
5. All protected routes verify the cookie on each request
6. Logout clears the cookie server-side
```



## 🔮 Future Improvements

- [ ] User Management panel
- [ ] Email Notifications
- [ ] Activity & Audit Logs
- [ ] Team Collaboration features
- [ ] Lead Notes & File Attachments
- [ ] Advanced reporting & export options

---

## 👤 Author

**Amit**

[![GitHub](https://img.shields.io/badge/GitHub-Code--By--Amit-181717?style=flat-square&logo=github)](https://github.com/Code-By-Amit)

---

<div align="center">

⭐ If you found this project helpful, please give it a star on GitHub!

</div>