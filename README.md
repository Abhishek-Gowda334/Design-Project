# 🌱 AgriLearn - The Future of Virtual Farming

AgriLearn is a comprehensive virtual farming platform designed to empower farmers and agricultural enthusiasts with modern cultivation knowledge. It combines detailed learning modules, AI-driven yield analysis, and real-time weather data to promote sustainable and profitable farming practices.

![AgriLearn Banner](frontend/public/images/logo.png) *(Note: Placeholder path for logo if available)*

## 🚀 Features

### 📚 Interactive Learning Modules
- **Detailed Syllabi**: Comprehensive guides for major crops like Rice, Wheat, Maize, and more.
- **Stage-based Learning**: Modules are broken down into logical stages (e.g., Nursery Preparation, Transplanting, Harvesting).
- **Progress Tracking**: Your learning progress is saved automatically. Resume exactly where you left off.
- **Personalized Experience**: "Enroll", "Continue", and "Completed" states tailored to each user.

### 🤖 AI Yield Calculator (`/tools`)
- **Powered by Google Gemini**: accurate crop recommendations based on your specific available area and location.
- **Smart Estimation**: Get estimated income potential and best farming methods for your space.

### 🌦️ Live Weather Dashboard
- **Real-time Data**: Current temperature, humidity, and forecast fetched via OpenWeatherMap.
- **Location-based**: Automatically detects user location for hyper-local updates.

### 🔐 Secure Authentication
- **Traditional Login**: Email and Password authentication with JWT.
- **Biometric Login**: Secure, passwordless login using WebAuthn (Passkeys/FaceID).

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (React)
- **Styling**: Vanilla CSS Modules (for granular control and modern glassmorphism effects)
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: `jsonwebtoken` (JWT) & `@simplewebauthn/server`
- **AI Integration**: Google Generative AI SDK

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas Account (or local MongoDB)
- Google Gemini API Key
- OpenWeatherMap API Key

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/agrilearn.git
cd agrilearn
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
RP_ID=localhost
RP_NAME=AgriLearn
RP_ORIGIN=http://localhost:3000
```
*Note: `RP_ID`, `RP_NAME`, and `RP_ORIGIN` are required for WebAuthn (Biometric Login).*

Start the backend server:
```bash
npm start
# Server runs on http://localhost:5000
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory and install dependencies:
```bash
cd frontend
npm install
```

Start the Next.js development server:
```bash
npm run dev
# App runs on http://localhost:3000
```

## 🖥️ Usage

1.  **Sign Up**: Create an account using email/password.
2.  **Dashboard**: proper login redirects you to the personalized dashboard.
3.  **Explore**: Visit "Learning Modules" to start a course.
4.  **Tools**: Use the "Yield Calculator" to get AI advice for your land.
5.  **Profile**: Setup Passkey login in the profile settings (coming soon) for faster access.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with 💚 by Team and the AgriLearn Team.
