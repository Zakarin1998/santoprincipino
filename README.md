# Santoprincipino Website

A modern React+Vite website for the Santoprincipino, with a Node.js Express backend.

![Jacky Chan Dollar](https://via.placeholder.com/1200x600/1a1a1a/FFD700?text=Jacky+Chan+Dollar)

## Overview

This project is a modern, responsive website showcasing the Santoprincipino autistic kwaii artistic repertory. The site includes information about the artist background, copies of the NFT for sale, and connection to Metamask.

## Project Structure

This project is organized as a monorepo with:

- **Frontend**: A React application built with Vite, TypeScript, and Material UI
- **Backend**: An Express API server providing token data


```
/
├── frontend/                     # React frontend application
│   ├── src/
│   │   ├── components/           # UI components
│   │   ├── pages/                # Page containers
│   │   ├── types.ts              # TypeScript interfaces
│   │   └── App.tsx               # Main application component
│   └── package.json              # Frontend dependencies
│
├── backend/                      # Express backend application
│   ├── src/
│   │   └── server.ts             # API server with mock data
│   ├── tsconfig.json             # TypeScript configuration
│   └── package.json              # Backend dependencies
│
├── README.md                     # Project documentation
├── INSTRUCTIONS.md               # How to run the application
└── REACT-VITE-APP.md             # Detailed technical documentation
```

---

## Installation

1. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```
2. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   ```

---

## Running the Application

1. **Start the backend server**

   ```bash
   cd backend
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

2. **Start the frontend**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

---

## Building for Production

### Frontend

```bash
cd frontend
npm run build
```

* Output in `frontend/dist`

### Backend

```bash
cd backend
npm run build
```

* Output in `backend/dist`

---

## Technical Documentation

* **REACT-VITE-APP.md**
  Detailed frontend architecture and configuration
* **INSTRUCTIONS.md**
  Step-by-step guide to run the application

---

## License

This project is licensed under the MIT License.
