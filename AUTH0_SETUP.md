# Auth0 Integration Setup Guide

## ✅ What's Been Configured

Your MedTrip India application now has Auth0 authentication integrated!

### Frontend Configuration
- **Auth0 React SDK** installed
- **Login/Logout buttons** added to navbar
- **Auth0Provider** wrapping the entire app
- **Callback page** for handling redirects
- **Environment variables** configured in `.env`

### Backend Configuration
- **JWT verification middleware** created
- **Auth0 credentials** added to `backend/.env`
- **Protected routes** ready to use

---

## 🔧 Auth0 Dashboard Setup

### 1. Configure Allowed Callback URLs
In your Auth0 Dashboard (https://manage.auth0.com):

1. Go to **Applications** → **Applications**
2. Select your application: `8blsK6WS4LieYK6WcpN4gKiHtNh4W8K4`
3. Go to **Settings** tab
4. Add these URLs:

**Allowed Callback URLs:**
```
http://localhost:5173/callback,
http://localhost:5173
```

**Allowed Logout URLs:**
```
http://localhost:5173
```

**Allowed Web Origins:**
```
http://localhost:5173
```

**Allowed Origins (CORS):**
```
http://localhost:5173
```

5. Click **Save Changes**

---

## 🚀 How to Use

### Frontend - User Login

The login button is now in the navbar. Users can:
- Click "Login" to authenticate
- See their profile picture and name when logged in
- Click "Logout" to sign out

### Backend - Protect Routes

To protect API routes, use the middleware:

```javascript
import { checkJwt, requireAdmin } from './middleware/auth.js';

// Public route (no auth required)
router.get('/api/hospitals', getAllHospitals);

// Protected route (requires login)
router.post('/api/inquiries', checkJwt, createInquiry);

// Admin only route
router.get('/api/admin/enquiries', checkJwt, requireAdmin, getEnquiries);
```

---

## 📝 Environment Variables

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

## 🧪 Testing Authentication

### 1. Start Both Servers
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm start
```

### 2. Test Login Flow
1. Visit http://localhost:5173
2. Click "Login" button in navbar
3. Sign in with Auth0
4. You'll be redirected back to the app
5. Your profile should appear in the navbar

### 3. Test Protected API Routes
```bash
# Get access token from browser (after login)
# Open DevTools → Application → Local Storage → auth0spa

# Use token in API requests
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:5000/api/protected-route
```

---

## 🔐 User Roles & Permissions

To add admin access:

1. Go to Auth0 Dashboard → **User Management** → **Users**
2. Select a user
3. Go to **Roles** tab
4. Assign "Admin" role (you'll need to create this role first)

---

## 📦 Files Created/Modified

### New Files:
- `src/app/auth/Auth0Provider.tsx` - Auth0 provider wrapper
- `src/app/components/LoginButton.tsx` - Login/logout button
- `src/app/pages/Callback.tsx` - Auth callback handler
- `backend/src/middleware/auth.js` - JWT verification middleware
- `.env` - Frontend environment variables
- `AUTH0_SETUP.md` - This guide

### Modified Files:
- `src/main.tsx` - Added Auth0Provider
- `src/app/components/Navbar.tsx` - Added LoginButton
- `src/app/routes.ts` - Added callback route
- `backend/.env` - Added Auth0 credentials
- `backend/.env.example` - Added Auth0 template

---

## 🎯 Next Steps

1. **Configure Auth0 Dashboard** (see section above)
2. **Restart both servers** to load new environment variables
3. **Test login flow**
4. **Protect your API routes** using the middleware
5. **Add user roles** for admin access

---

## 🐛 Troubleshooting

**Login redirects to wrong URL:**
- Check `VITE_AUTH0_CALLBACK_URL` in `.env`
- Verify callback URL in Auth0 Dashboard

**"Invalid state" error:**
- Clear browser cache and local storage
- Try incognito mode

**JWT verification fails:**
- Check `AUTH0_DOMAIN` and `AUTH0_AUDIENCE` match in both .env files
- Verify token is being sent in Authorization header

**CORS errors:**
- Add your frontend URL to "Allowed Origins" in Auth0 Dashboard
- Check backend CORS configuration

---

## 📚 Resources

- [Auth0 React SDK Docs](https://auth0.com/docs/quickstart/spa/react)
- [Auth0 Node.js API Docs](https://auth0.com/docs/quickstart/backend/nodejs)
- [JWT Verification](https://auth0.com/docs/secure/tokens/json-web-tokens/validate-json-web-tokens)

---

## ✨ Features Enabled

✅ User login/logout
✅ Profile display in navbar
✅ JWT token management
✅ Protected API routes
✅ Admin role checking
✅ Secure session storage
✅ Automatic token refresh

Your authentication is now ready to use!
