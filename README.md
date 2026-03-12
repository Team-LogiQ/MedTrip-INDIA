# 🏥 MedTrip INDIA

### Medical Tourism & Healthcare Discovery Platform

![GitHub repo size](https://img.shields.io/github/repo-size/Team-LogiQ/MedTrip-INDIA)
![GitHub stars](https://img.shields.io/github/stars/Team-LogiQ/MedTrip-INDIA)
![GitHub forks](https://img.shields.io/github/forks/Team-LogiQ/MedTrip-INDIA)
![GitHub issues](https://img.shields.io/github/issues/Team-LogiQ/MedTrip-INDIA)
![License](https://img.shields.io/badge/license-MIT-blue)

MedTrip INDIA is a **medical tourism and healthcare discovery platform** that helps patients find **top hospitals, experienced doctors, and transparent treatment costs across India**.

The platform simplifies healthcare planning by allowing users to **search treatments, explore hospitals, compare doctors, and understand treatment costs** in one place.

---

# 🌍 Overview

India is one of the world's leading destinations for **medical tourism**, but patients often face challenges such as:

* Lack of transparent treatment costs
* Difficulty finding trusted hospitals
* Limited information about specialist doctors
* Fragmented healthcare data

**MedTrip INDIA solves this problem** by providing a **centralized healthcare discovery platform** where patients can explore treatments, hospitals, and doctors before planning their medical journey.

---

# 🚀 Key Features

### 🔍 Treatment Search

Users can explore treatments such as:

* Heart Bypass Surgery
* Kidney Transplant
* Knee Replacement
* IVF Treatment
* Hair Transplant
* LASIK Eye Surgery
* Liver Transplant
* Bariatric Surgery

---

### 🏥 Hospital Discovery

Users can explore hospitals across major Indian medical hubs:

* Delhi
* Mumbai
* Chennai
* Hyderabad
* Bangalore
* Gurgaon

Each hospital listing includes:

* Hospital overview
* Available treatments
* Associated doctors
* Estimated treatment costs

---

### 👨‍⚕️ Doctor Profiles

Doctor profiles provide:

* Name
* Specialization
* Experience
* Hospital affiliation

This helps patients choose the **right specialist for their treatment**.

---

### 💰 Transparent Treatment Cost

Estimated treatment costs allow patients to:

* Compare hospitals
* Plan finances
* Avoid hidden healthcare costs

---

### 📍 Location Based Search

Patients can filter hospitals by **city and treatment type** to find suitable healthcare options.

---

# 🛠 Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB / Firebase (planned architecture)

## Development Tools

* Git
* GitHub
* VS Code

---

# ⚙️ Backend Architecture

The backend handles **data management, API requests, and system logic** for the MedTrip platform.

Responsibilities of the backend:

* Manage hospital data
* Manage doctor profiles
* Handle treatment data
* Provide search APIs
* Handle authentication
* Connect frontend with database

### Backend Flow

```
Frontend (HTML / JS)
        ↓
REST API Server (Node.js + Express)
        ↓
Database (MongoDB / Firebase)
```

---

# 🔗 REST API Architecture

The platform is designed with **RESTful APIs** to manage healthcare data.

---

# 📡 API Endpoints

## 1️⃣ Get All Treatments

```
GET /api/treatments
```

Returns a list of all available treatments.

Example Response

```
[
  {
    "id": 1,
    "name": "Heart Bypass Surgery",
    "category": "Cardiology"
  },
  {
    "id": 2,
    "name": "Kidney Transplant",
    "category": "Nephrology"
  }
]
```

---

## 2️⃣ Get Hospitals

```
GET /api/hospitals
```

Returns all hospitals in the platform.

Example Response

```
[
  {
    "hospital": "Apollo Hospitals",
    "city": "Chennai",
    "specialization": ["Cardiology", "Orthopedics"]
  }
]
```

---

## 3️⃣ Get Hospitals by Treatment

```
GET /api/hospitals?treatment=heart-bypass
```

Returns hospitals offering a specific treatment.

Example Response

```
[
  {
    "hospital": "Apollo Hospitals",
    "city": "Chennai",
    "treatment": "Heart Bypass Surgery",
    "cost_estimate": "₹2,50,000"
  }
]
```

---

## 4️⃣ Get Hospitals by City

```
GET /api/hospitals?city=mumbai
```

Returns hospitals located in a specific city.

---

## 5️⃣ Get Doctor Profiles

```
GET /api/doctors
```

Returns a list of doctors.

Example Response

```
[
  {
    "name": "Dr. Rajesh Sharma",
    "specialization": "Cardiac Surgeon",
    "experience": "15 years"
  }
]
```

---

## 6️⃣ Get Doctor by ID

```
GET /api/doctors/:id
```

Returns detailed information about a specific doctor.

---

## 7️⃣ Get Treatment Cost

```
GET /api/cost?treatment=knee-replacement
```

Returns estimated treatment costs across hospitals.

---

# 🔐 Authentication System

The platform supports authentication using:

* Auth0
* JWT Authentication

Authentication allows:

* Secure user login
* Patient dashboard
* Appointment booking (future feature)

---

# 🗄 Database Structure

### Hospitals Collection

```
{
  "name": "Apollo Hospital",
  "city": "Chennai",
  "specialization": ["Cardiology", "Orthopedics"],
  "treatments": ["Heart Bypass", "Knee Replacement"]
}
```

---

### Doctors Collection

```
{
  "name": "Dr. Amit Kumar",
  "specialization": "Cardiology",
  "experience": 18,
  "hospital": "Apollo Hospital"
}
```

---

### Treatments Collection

```
{
  "name": "Heart Bypass Surgery",
  "category": "Cardiology",
  "avg_cost": "₹2,50,000"
}
```

---

# 📂 Project Structure

```
MedTrip-INDIA
│
├── src/                         # Main source code
├── .env.example                 # Environment variables template
├── .gitignore                   # Ignored files
├── AUTH0_SETUP.md               # Authentication setup guide
├── ANIMATIONS_GUIDE.md          # UI animations guide
├── ANIMATIONS_COMPLETE.md       # Animation documentation
├── ATTRIBUTIONS.md              # Resource credits
├── PROJECT_CLEANUP_SUMMARY.md   # Code cleanup notes
├── GITHUB_UPLOAD_GUIDE.md       # GitHub upload instructions
├── GIT_COMMANDS.txt             # Useful Git commands
└── README.md
```

---

# ⚙️ Installation & Setup

### Clone the Repository

```
git clone https://github.com/Team-LogiQ/MedTrip-INDIA.git
```

---

### Navigate to Project Directory

```
cd MedTrip-INDIA
```

---

### Setup Environment Variables

Create a `.env` file based on `.env.example`.

Example:

```
API_KEY=your_api_key
AUTH_SECRET=your_secret
```

---

### Run the Project

Open the main HTML file:

```
index.html
```

---

# 📊 Example User Flow

1. User visits the platform
2. Searches for a treatment
3. Selects preferred city
4. Views hospitals offering the treatment
5. Compares doctors and costs
6. Chooses the most suitable healthcare provider

---

# 🔮 Future Improvements

* Appointment booking system
* AI-powered hospital recommendations
* Telemedicine consultation
* Patient reviews and ratings
* International patient assistance
* Insurance integration

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create a new branch
3. Make improvements
4. Submit a pull request

---

# 👥 Team

**Team LogiQ**

Developed as a **hackathon project focused on improving healthcare accessibility and medical tourism discovery in India**.

---

# ⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork the project
📢 Share with others

---

# 📜 License

This project is intended for **educational and hackathon purposes**.

---

# 📬 Contact

For suggestions or issues, please open a **GitHub Issue**.

---

**MedTrip INDIA — Simplifying Healthcare Discovery** 🏥🇮🇳
