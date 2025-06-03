# Jacky Chan Dollar Website - Setup Instructions

# First-time Setup

## 1. Clone the Repository (if you haven't already)

```bash
git clone https://github.com/yourusername/jcd-website.git
cd jcd-website
```

## 2. Backend Setup

```bash
cd backend
npm install
```

**Backend dependencies include:**

* **Express**: Web server framework
* **CORS**: Cross-origin resource sharing middleware
* **TypeScript**: Type checking and compilation
* **ts-node**: TypeScript execution environment
* **nodemon**: Auto-restart during development

## 3. Frontend Setup

```bash
cd ../frontend
npm install
```

**Frontend dependencies include:**

* **React**: UI library
* **Vite**: Build tool
* **Material UI**: Component library
* **Axios**: HTTP client
* **React Router**: Navigation

---

# Running the Application

## Option 1: Run Both Services Separately (Recommended for Development)

### Start the Backend

```bash
cd backend
npm run dev
```

> This starts the backend server on `http://localhost:5000` with `nodemon`, which will automatically restart when you make changes.

### Start the Frontend (in a new terminal)

```bash
cd frontend
npm run dev
```

> This starts the Vite development server on `http://localhost:5173` with hot module replacement (HMR) enabled.

---

## Option 2: Use Concurrently (Optional)

If you prefer to run both services with a single command, you can use **concurrently**:

### Install concurrently globally (if you haven't already):

```bash
npm install -g concurrently
```

### From the project root, run:

```bash
concurrently "cd backend && npm run dev" "cd frontend && npm run dev"
```

---

# Building for Production

## Building the Backend

```bash
cd backend
npm run build
```

> This compiles TypeScript to JavaScript in the `dist/` directory.

### To run the compiled backend:

```bash
npm start
```

## Building the Frontend

```bash
cd frontend
npm run build
```

> This creates optimized production files in the `dist/` directory. These static files can be served by any web server.

### To preview the production build locally:

```bash
npm run preview
```

---

# Troubleshooting

## Common Issues and Solutions

### "Cannot find module" or dependency errors

Make sure all dependencies are installed:

```bash
cd backend && npm install
cd ../frontend && npm install
```

---

### Backend not starting

Check if another service is using port `5002`:

```bash
# On Windows
netstat -ano | findstr :5000

# On macOS/Linux
lsof -i :5000
```

---

### Frontend can't connect to backend

Make sure:

* The backend is running on port `5000`
* CORS is properly configured (already set up in the code)
* The API URL in `frontend/src/App.tsx` is correct:

```ts
const API_URL_DEV = 'http://localhost:5000/api';
const API_URL_DEV = 'https://dashboard-production-ab35.up.railway.app/';
```

---

### TypeScript errors

If you encounter TypeScript errors:

```bash
cd frontend
npx tsc --noEmit
```

> This will show all TypeScript errors without generating output files.

---

# API Documentation

## GET `/api/token`

Returns token data including name, symbol, contract address, and tokenomics.

### Example response:

```json
{
  "name": "Jacky Chan Dollar",
  "symbol": "$JCD",
  "tagline": "2018 Relic",
  "contractAddress": "0x0Ed024d39d55e486573EE32e583bC37Eb5A6271f",
  "socialLinks": {
    "telegram": "https://t.me/cz4png",
    "twitter": "https://twitter.com/JChanDollar",
    "opensea": "https://opensea.io/collection/jacky-chan-dollar-classic"
  },
  "tokenomics": {
    "totalSupply": "19 860 225",
    "circulating": "11 060 225",
    "marketCap": "$100k",
    "taxBuy": "0%",
    "taxSell": "0%"
  },
  "safu": [
    "Contract verified & renounced",
    "Community & ETH liquidity pools",
    "44% tokens burned",
    "0% buy/sell tax"
  ],
  "chart": "https://dexscreener.com/ethereum/0x0Ed024d39d55e486573EE32e583bC37Eb5A6271f"
}
```

## Guida per il deploy

✅ Deploy del **backend Express** gratuitamente
✅ Deploy del **frontend React-Vite** gratuitamente e con il tuo dominio `jchandollar.vip`

---

## 🌐 1️⃣ Deploy del Backend (Express)

Per il backend, ti consiglio **Railway** (o **Render**) perché sono facili, gratuiti e ideali per Node.js.

### 🔧 Passi per Railway

1️⃣ Vai su [https://railway.app](https://railway.app)
2️⃣ Fai login (puoi usare GitHub)
3️⃣ Clicca su “New Project” → “Deploy from GitHub repo”
4️⃣ Collega il tuo repo GitHub dove c’è la cartella `backend/`
5️⃣ Railway rileva il tuo `package.json` e auto-configura il deploy
6️⃣ Imposta come comando di start:

```bash
npm run dev
```

O se hai un build step:

```bash
npm run build && node dist/server.js
```

7️⃣ Railway ti darà un URL pubblico per il tuo **API server** (es. `https://your-backend-production.up.railway.app`).

📦 **Alternativa**: Render.com → stessa procedura, molto simile!

---

## ⚛️ 2️⃣ Deploy del Frontend (React-Vite) su Vercel + Dominio

Per il frontend, **Vercel** è la scelta top (grande compatibilità con Vite e super semplice da linkare al dominio).

### 🔧 Passi per Vercel

1️⃣ Vai su [https://vercel.com](https://vercel.com)
2️⃣ Login con GitHub e importa il repo (cartella `frontend/`)
3️⃣ Vercel riconosce che è un progetto Vite (framework: **Other**, build: `npm run build`, output: `dist`)
4️⃣ Vercel farà deploy automatico e fornirà un URL pubblico tipo `https://jchandollar.vercel.app`
5️⃣ Vai su `Settings` del progetto Vercel → `Domains` e aggiungi `jchandollar.vip`
6️⃣ Segui le istruzioni Vercel per aggiornare i DNS (es. su GoDaddy, Namecheap, Cloudflare).

---

### 🚀 Impostare la comunicazione frontend-backend

Nel **frontend** (Vite), per chiamare le API del backend, usa l’URL fornito da Railway.
💡 Esempio in `.env` (o file di config Vite):

```bash
VITE_API_URL=https://your-backend-production.up.railway.app/api
```

E nel codice React:

```tsx
fetch(`${import.meta.env.VITE_API_URL}/token`)
```

---

## 🌟 Riepilogo finale

✅ **Backend**: deploy gratuito su Railway o Render → URL pubblico.
✅ **Frontend**: deploy gratuito su Vercel → con dominio `jchandollar.vip`.
✅ **Dominio**: collegato su Vercel (`Domains` → segui setup DNS).
✅ **API URL**: aggiornato nel frontend per puntare al backend in cloud.

---

### ⚡ Vuoi che ti dia:

* 🌟 Esempio di `.env` pronto all’uso
* 🌟 Setup completo `vite.config.ts` per proxy API locale
* 🌟 O configurazioni speciali per domini e SSL?
