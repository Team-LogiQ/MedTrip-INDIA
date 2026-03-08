# MedTrip India Backend API

Backend API for the MedTrip India Medical Tourism Platform.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation Steps

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables**
   Edit `.env` file with your settings:
   - Set `MONGODB_URI` to your MongoDB connection string
   - Set `JWT_SECRET` to a secure random string
   - Configure email settings if needed

5. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

6. **Start the server**
   
   Development mode (with auto-reload):
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm start
   ```

7. **Verify API is running**
   Open browser and visit: `http://localhost:5000/api/health`

## 📡 API Endpoints

### Hospitals
- `GET /api/hospitals` - Get all hospitals
- `GET /api/hospitals/:id` - Get single hospital
- `POST /api/hospitals` - Create hospital (Admin)
- `PUT /api/hospitals/:id` - Update hospital (Admin)
- `DELETE /api/hospitals/:id` - Delete hospital (Admin)

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get single doctor
- `POST /api/doctors` - Create doctor (Admin)
- `PUT /api/doctors/:id` - Update doctor (Admin)
- `DELETE /api/doctors/:id` - Delete doctor (Admin)

### Inquiries
- `POST /api/inquiries` - Submit inquiry
- `GET /api/inquiries` - Get all inquiries (Admin)
- `PUT /api/inquiries/:id` - Update inquiry status (Admin)

## 🗄️ Database Setup

### Option 1: Local MongoDB
1. Install MongoDB: https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/medtrip-india`

### Option 2: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## 🔧 Environment Variables

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/medtrip-india
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:5173
```

## 📦 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js       # Database configuration
│   ├── controllers/
│   │   ├── hospitalController.js
│   │   ├── doctorController.js
│   │   └── inquiryController.js
│   ├── models/
│   │   ├── Hospital.js
│   │   ├── Doctor.js
│   │   ├── Treatment.js
│   │   └── Inquiry.js
│   ├── routes/
│   │   ├── hospitalRoutes.js
│   │   ├── doctorRoutes.js
│   │   └── inquiryRoutes.js
│   └── server.js             # Main server file
├── .env.example
├── package.json
└── README.md
```

## 🧪 Testing API

Use tools like:
- Postman: https://www.postman.com/
- Thunder Client (VS Code extension)
- curl commands

Example:
```bash
curl http://localhost:5000/api/hospitals
```

## 🔐 Security Notes

- Change `JWT_SECRET` in production
- Use environment variables for sensitive data
- Enable CORS only for trusted domains
- Implement authentication for admin routes
- Use HTTPS in production

## 📝 Next Steps

1. Add authentication middleware
2. Implement file upload for images
3. Add email notifications
4. Create admin dashboard
5. Add payment integration
6. Implement booking system

## 🐛 Troubleshooting

**MongoDB connection error:**
- Check if MongoDB is running
- Verify connection string in `.env`
- Check network/firewall settings

**Port already in use:**
- Change PORT in `.env`
- Kill process using the port

**Module not found:**
- Run `npm install` again
- Delete `node_modules` and reinstall

## 📞 Support

For issues or questions, contact: support@medtripindia.com
