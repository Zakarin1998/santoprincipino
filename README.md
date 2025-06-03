# Jacky Chan Dollar ($JCD) Website

A modern React+Vite website for the Jacky Chan Dollar ($JCD) token with a Node.js Express backend.

![Jacky Chan Dollar](https://via.placeholder.com/1200x600/1a1a1a/FFD700?text=Jacky+Chan+Dollar)

## Overview

This project is a modern, responsive website showcasing the Jacky Chan Dollar ($JCD) token - a 2018 Uniswap relic. The site includes information about the token's history, tokenomics, and connection to Uniswap's origins.

## Useful Reference URLs

- [ICOHOLDER](https://icoholder.com/it/j-chan-dollar-1064170)
- [MEDIUM](https://medium.com/@JackyChanDollar/join-the-rebirth-of-uniswaps-first-swapped-token-jacky-chan-dollar-jcd-in-2023-beyond-memes-9e12556632d1)
- [CRYPTORANK](https://cryptorank.io/ico/uniswap)




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

## About Jacky Chan Dollar (\$JCD)

* **Contract Address:** `0x0Ed024d39d55e486573EE32e583bC37Eb5A6271f`
* **Total Supply:** 19,860,225
* **Circulating Supply:** 11,060,225
* **Features:**

  * Contract verified & renounced
  * 44% tokens burned
  * 0% buy/sell tax

---

## License

This project is licensed under the MIT License.
