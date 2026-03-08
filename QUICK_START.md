# 🚀 MedTrip India - Quick Start Guide

## ✅ Current Status

Both servers are running and Auth0 is configured!

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000
- **Database**: MongoDB at 127.0.0.1:27017

---

## 🔐 Auth0 Integration Complete

### What's Working:
✅ Login/Logout buttons in navbar
✅ User profile display
✅ JWT token management
✅ Protected API routes ready
✅ Environment variables configured

### ⚠️ Important: Complete Auth0 Setup

**You MUST configure these URLs in Auth0 Dashboard:**

1. Go to: https://manage.auth0.com
2. Navigate to: **Applications** → **Applications** → Your App
3. Add these URLs in **Settings**:

```
Allowed Callback URLs:
http://localhost:5173/callback, http://localhost:5173

Allowed Logout URLs:
http://localhost:5173

Allowed Web Origins:
http://localhost:5173

Allowed Origins (CORS):
http://localhost:5173
```

4. Click **Save Changes**

---

## 🧪 Test Authentication

1. Visit http://localhost:5173
2. Click "Login" button in navbar
3. Sign in with Auth0
4. You should see your profile in navbar

---

## 📁 Project Structure

```
MedTrip India/
├── src/                          # Frontend (React + TypeScript)
│   ├── app/
│   │   ├── auth/                 # Auth0 provider
│   │   ├── components/           # UI components + LoginButton
│   │   ├── pages/                # All pages + Callback
│   │   └── routes.ts             # Routes with /callback
│   └── main.tsx                  # App entry with Auth0Provider
│
├── backend/                      # Backend (Node.js + Express)
│   ├── src/
│   │   ├── middleware/           # Auth middleware (NEW)
│   │   ├── controllers/          # API controllers
│   │   ├── models/               # MongoDB models
│   │   ├── routes/               # API routes
│   │   └── server.js             # Server entry
│   └── .env                      # Auth0 credentials
│
├── .env                          # Frontend Auth0 config
└── AUTH0_SETUP.md                # Detailed setup guide

```

---

## 🔧 Environment Variables

### Frontend (.env)
```env
VITE_AUTH0_DOMAIN=deego.us.auth0.com
VITE_AUTH0_CLIENT_ID=8blsK6WS4LieYK6WcpN4gKiHtNh4W8K4
VITE_AUTH0_AUDIENCE=https://deego.us.auth0.com/api/v2/
VITE_AUTH0_CALLBACK_URL=http://localhost:5173/callback
VITE_API_URL=http://localhost:5000
```

### Backend (backend/.env)
```env
AUTH0_DOMAIN=deego.us.auth0.com
AUTH0_CLIENT_ID=8blsK6WS4LieYK6WcpN4gKiHtNh4W8K4
AUTH0_CLIENT_SECRET=-KuE4wneZ9HmhUjxAl7WWzx_Lh80hRHFuePI-kni0wD-aEMRhtTv-VzBT1VM3V8A
AUTH0_SECRET=5f21eeffde31acbfdf3f1cecd326da63bdd3db7485f7d99ecfb4fe70b8cedf7b
AUTH0_AUDIENCE=https://deego.us.auth0.com/api/v2/
```

---

## 🛡️ Protect API Routes

Example of protecting routes in backend:

```javascript
import { checkJwt, requireAdmin } from './middleware/auth.js';

// Public route
router.get('/api/hospitals', getAllHospitals);

// Requires login
router.post('/api/inquiries', checkJwt, createInquiry);

// Admin only
router.get('/api/admin/enquiries', checkJwt, requireAdmin, getEnquiries);
```

---

## 📱 Features

### Implemented:
✅ Home page with search
✅ Hospitals & Clinics listing (with filters)
✅ Doctors directory
✅ Treatment search
✅ About & Help Desk pages
✅ Travel Guide
✅ Auth0 login/logout
✅ User profile display
✅ MongoDB database
✅ REST API

### Filters Available:
- **Type**: Hospital / Clinic
- **Location**: Tier-1 cities (Mumbai, Delhi, Bangalore, etc.)
- **Specialty**: Cardiology, Oncology, Neurology, etc.

---

## 🎯 Next Steps

1. ✅ Configure Auth0 Dashboard URLs (see above)
2. Test login functionality
3. Add protected routes to your API
4. Create user roles in Auth0
5. Implement booking system
6. Add payment integration

---

## 📞 Need Help?

- **Auth0 Setup**: See `AUTH0_SETUP.md`
- **Backend API**: See `backend/README.md`
- **Main README**: See `README.md`

---

## 🔄 Restart Servers

If you need to restart:

```bash
# Frontend
npm run dev

# Backend
cd backend
npm start
```

---

Your application is ready to use! 🎉
