# Google OAuth Login Application

A web application using React and Node.js with Google OAuth 2.0 authentication.

## Project Structure

```
.
├── frontend/         # React frontend
└── backend/         # Node.js backend
```

## System Requirements

- Node.js (v14 or higher)
- npm or yarn

## Installation and Configuration

### 1. Google OAuth Setup

1. Visit [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Go to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Select "Web application"
6. Add Authorized redirect URIs:
   - http://localhost:3000
7. Save the Client ID and Client Secret

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Copy `.env.example` to `.env` and update the values:
```bash
cp .env.example .env
```

Configure in `.env` file:
```
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_API_URL=http://localhost:5001
```

### 3. Backend Setup

```bash
cd backend
npm install
```

Copy `.env.example` to `.env` and update the values:
```bash
cp .env.example .env
```

Configure in `.env` file:
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
PORT=5001
```

## Running the Application

1. Start the Backend:
```bash
cd backend
npm start
```

2. Start the Frontend (in a new terminal):
```bash
cd frontend
npm run dev
```

Access the application at http://localhost:3000

## Notes

- Ensure Google OAuth credentials are properly configured
- Do not commit `.env` files to git
- Backend API runs on port 5001
- Frontend dev server runs on port 3000 