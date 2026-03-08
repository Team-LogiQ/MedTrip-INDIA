# GitHub Upload Guide - MedTrip India

## 📋 Files to Upload to GitHub

### ✅ Include These Files/Folders:

```
Medical Tourism Website/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── doctorController.js
│   │   │   ├── hospitalController.js
│   │   │   └── inquiryController.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── models/
│   │   │   ├── Doctor.js
│   │   │   ├── Hospital.js
│   │   │   ├── Inquiry.js
│   │   │   └── Treatment.js
│   │   ├── routes/
│   │   │   ├── doctorRoutes.js
│   │   │   ├── hospitalRoutes.js
│   │   │   └── inquiryRoutes.js
│   │   └── server.js
│   ├── .env.example          ✅ (template only)
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── public/
│   ├── images/
│   │   ├── hospitals/        ✅ (all 10 logos)
│   │   └── treatments/       ✅ (all 8 images)
│   └── videos/
│       └── surgery-background.mp4.mp4
│
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   └── Auth0Provider.tsx
│   │   ├── components/
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── ui/           ✅ (all 40+ components)
│   │   │   ├── Footer.tsx
│   │   │   ├── LoginButton.tsx
│   │   │   └── Navbar.tsx
│   │   ├── data/
│   │   │   └── treatmentData.ts
│   │   ├── pages/
│   │   │   ├── About.tsx
│   │   │   ├── AdminEnquiries.tsx
│   │   │   ├── Callback.tsx
│   │   │   ├── Doctors.tsx
│   │   │   ├── HelpDesk.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── HospitalDetail.tsx
│   │   │   ├── Hospitals.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Results.tsx
│   │   │   └── TravelGuide.tsx
│   │   ├── App.tsx
│   │   ├── Root.tsx
│   │   └── routes.ts
│   ├── imports/
│   │   └── medical-tourism-platform.md
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── main.tsx
│
├── .env.example              ✅ (template only)
├── .gitignore                ✅ (IMPORTANT!)
├── ATTRIBUTIONS.md
├── AUTH0_SETUP.md
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── PROJECT_CLEANUP_SUMMARY.md
├── QUICK_START.md
├── README.md
└── vite.config.ts
```

### ❌ DO NOT Upload These:

```
❌ node_modules/              (too large, auto-generated)
❌ backend/node_modules/      (too large, auto-generated)
❌ .env                       (contains secrets!)
❌ backend/.env               (contains secrets!)
❌ dist/                      (build output)
❌ build/                     (build output)
❌ .vscode/                   (editor settings)
❌ *.log                      (log files)
```

**Note**: The `.gitignore` file already excludes these!

---

## 🚀 Step-by-Step Upload Process

### Step 1: Initialize Git Repository

Open terminal in your project folder:

```bash
# Navigate to project folder
cd "C:\Users\jayes\Downloads\Medical Tourism Website"

# Initialize git
git init

# Check status
git status
```

### Step 2: Create .env.example Files

Before uploading, ensure you have template files without secrets:

**Frontend `.env.example`** (already exists):
```env
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_AUDIENCE=https://your-domain.auth0.com/api/v2/
VITE_AUTH0_CALLBACK_URL=http://localhost:5173/callback
VITE_API_URL=http://localhost:5000
```

**Backend `.env.example`** (already exists):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/medtrip-india
JWT_SECRET=your-secret-key
AUTH0_DOMAIN=your-domain.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
AUTH0_SECRET=your-64-character-secret
AUTH0_AUDIENCE=https://your-domain.auth0.com/api/v2/
FRONTEND_URL=http://localhost:5173
```

### Step 3: Add Files to Git

```bash
# Add all files (respects .gitignore)
git add .

# Check what will be committed
git status

# Commit with message
git commit -m "Initial commit: MedTrip India Medical Tourism Platform"
```

### Step 4: Create GitHub Repository

1. Go to https://github.com
2. Click "New repository" (+ icon, top right)
3. Fill in details:
   - **Repository name**: `medtrip-india` or `medical-tourism-platform`
   - **Description**: "Medical Tourism Platform connecting international patients with India's top hospitals"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (you already have one)
4. Click "Create repository"

### Step 5: Connect and Push to GitHub

GitHub will show you commands. Use these:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace**:
- `YOUR-USERNAME` with your GitHub username
- `REPO-NAME` with your repository name

### Step 6: Verify Upload

1. Refresh your GitHub repository page
2. You should see all files uploaded
3. Check that `.env` files are NOT visible (only `.env.example`)

---

## 📝 Create a Great README.md

Update your `README.md` with this structure:

```markdown
# MedTrip India - Medical Tourism Platform

Connect international patients with India's top-tier hospitals and world-class medical professionals.

## 🌟 Features

- 🏥 Browse 10+ JCI-accredited hospitals and clinics
- 👨‍⚕️ View profiles of 8+ specialist doctors
- 💰 Compare treatment costs (60-80% savings)
- 🔐 Secure Auth0 authentication
- 📍 Location-based filtering (Tier-1 cities)
- 🔍 Advanced search and filters
- 📱 Fully responsive design

## 🛠️ Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Auth0 React SDK
- Lucide Icons

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Auth0 JWT verification
- CORS enabled

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB
- Auth0 account

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/medtrip-india.git
cd medtrip-india
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd backend
npm install
cd ..
```

4. Configure environment variables
```bash
# Copy frontend .env.example to .env
cp .env.example .env

# Copy backend .env.example to .env
cp backend/.env.example backend/.env
```

5. Update `.env` files with your credentials

6. Start MongoDB
```bash
mongod
```

7. Start backend server
```bash
cd backend
npm start
```

8. Start frontend (in new terminal)
```bash
npm run dev
```

9. Open http://localhost:5173

## 📚 Documentation

- [Quick Start Guide](QUICK_START.md)
- [Auth0 Setup](AUTH0_SETUP.md)
- [Backend API](backend/README.md)
- [Project Cleanup](PROJECT_CLEANUP_SUMMARY.md)

## 🔐 Environment Variables

See `.env.example` and `backend/.env.example` for required variables.

## 📸 Screenshots

[Add screenshots here]

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines first.

## 📄 License

MIT License

## 👥 Authors

- Your Name - [GitHub](https://github.com/YOUR-USERNAME)

## 🙏 Acknowledgments

- Hospital images from Unsplash
- Icons from Lucide
- UI components from Radix UI
```

---

## ⚠️ Important Security Notes

### Before Pushing to GitHub:

1. ✅ **Verify .gitignore is working**
   ```bash
   git status
   # Should NOT show .env files or node_modules
   ```

2. ✅ **Check for secrets in code**
   ```bash
   # Search for any hardcoded secrets
   grep -r "mongodb://" src/
   grep -r "AUTH0" src/
   ```

3. ✅ **Remove sensitive data from .env.example**
   - Use placeholder values
   - Never include real API keys

4. ✅ **Update README with setup instructions**
   - Tell users to create their own .env files
   - Provide Auth0 setup guide

### After Pushing:

1. ✅ **Verify on GitHub**
   - Check that .env files are NOT visible
   - Confirm node_modules is not uploaded

2. ✅ **Add repository description and topics**
   - Topics: `medical-tourism`, `react`, `nodejs`, `mongodb`, `auth0`

3. ✅ **Enable GitHub Pages** (optional)
   - For hosting documentation

---

## 📊 Repository Size Estimate

- **With images**: ~50-100 MB
- **Without node_modules**: Manageable size
- **Video file**: ~10-20 MB

If repository is too large, consider:
- Using Git LFS for large files
- Hosting images on CDN
- Compressing video file

---

## 🔄 Future Updates

To push updates:

```bash
# Make changes to your code
# ...

# Stage changes
git add .

# Commit
git commit -m "Description of changes"

# Push
git push origin main
```

---

## ✅ Checklist Before Upload

- [ ] `.gitignore` file exists
- [ ] `.env` files are in `.gitignore`
- [ ] `.env.example` files have placeholder values
- [ ] `node_modules/` is in `.gitignore`
- [ ] README.md is updated
- [ ] All secrets removed from code
- [ ] Auth0 credentials are placeholders
- [ ] MongoDB URI is localhost in example
- [ ] Documentation files included
- [ ] License file added (optional)

---

**Ready to upload!** 🚀

Follow the steps above and your project will be safely on GitHub!
