# Jacky Chan Dollar Website - Technical Documentation

This document provides detailed technical information about the Jacky Chan Dollar website implementation, architecture, and configuration.

## Table of Contents

- [Stack Overview](#stack-overview)
- [Frontend Architecture](#frontend-architecture)
  - [Directory Structure](#frontend-directory-structure)
  - [Key Files](#key-frontend-files)
  - [Component Hierarchy](#component-hierarchy)
  - [State Management](#state-management)
  - [TypeScript Types](#typescript-types)
- [Backend Architecture](#backend-architecture)
  - [Directory Structure](#backend-directory-structure)
  - [API Endpoints](#api-endpoints)
  - [Mock Data](#mock-data)
- [Configuration Files](#configuration-files)
- [Styling Approach](#styling-approach)
- [Performance Optimizations](#performance-optimizations)
- [Deployment Recommendations](#deployment-recommendations)

## Stack Overview

The application uses the following technologies:

### Frontend
- **React 18**: Core UI library
- **TypeScript**: For type safety and enhanced developer experience
- **Vite**: Build tool offering fast development and optimized production builds
- **Material UI**: Component library for consistent, responsive UI
- **React Router DOM**: For routing and navigation
- **Axios**: For API requests to the backend

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework for building the API
- **TypeScript**: For type safety
- **CORS**: For handling cross-origin requests

## Frontend Architecture

### Frontend Directory Structure

```
frontend/
├── public/               # Static files
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable UI components
│   │   ├── CustomTimeline.tsx     # Custom timeline component
│   │   ├── Footer.tsx             # Site footer
│   │   ├── HeroSection.tsx        # Hero banner section
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── RelicsSection.tsx      # Ethereum relics section
│   │   ├── TokenomicsSection.tsx  # Token economics section
│   │   └── UniswapOriginsAlt.tsx  # Uniswap history section
│   ├── pages/            # Page containers
│   │   └── HomePage.tsx           # Main homepage container
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   ├── types.ts          # TypeScript type definitions
│   └── index.css         # Global styles
├── index.html            # HTML template
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

### Key Frontend Files

#### `src/main.tsx`
The application entry point that renders the root React component and sets up React Router.

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

#### `src/App.tsx`
The main application component that:
- Creates and configures the Material UI theme
- Fetches data from the backend API
- Sets up routes using React Router
- Manages global state and error handling

#### `src/types.ts`
Contains TypeScript interfaces for all data structures used in the application:

```tsx
export interface TokenData {
  name: string;
  symbol: string;
  tagline: string;
  contractAddress: string;
  socialLinks: {
    telegram: string;
    twitter: string;
    opensea: string;
  };
  tokenomics: {
    totalSupply: string;
    circulating: string;
    marketCap: string;
    taxBuy: string;
    taxSell: string;
  };
  safu: string[];
  chart: string;
  priceHistory: {
    date: string;
    price: number;
  }[];
}

export interface Relic {
  symbol: string;
  name: string;
  description: string;
  contract?: string;
}

export interface UniswapOrigin {
  title: string;
  description: string;
}

export interface UniswapOrigins {
  jacky_hayden: UniswapOrigin;
  devcon4: UniswapOrigin;
  ashleigh: UniswapOrigin;
}
```

### Component Hierarchy

```
App
├── Navbar
├── Routes
│   └── HomePage
│       ├── HeroSection
│       ├── TokenomicsSection
│       ├── RelicsSection
│       ├── UniswapOriginsSection
│       └── Quote Section
└── Footer
```

### State Management

The application uses React's built-in useState and useEffect hooks for state management. The core state is maintained in the App component and passed down to child components as props:

```tsx
// Main state in App.tsx
const [tokenData, setTokenData] = useState<TokenData | null>(null);
const [relics2015, setRelics2015] = useState<Relic[]>([]);
const [relics2018, setRelics2018] = useState<Relic[]>([]);
const [uniswapOrigins, setUniswapOrigins] = useState<UniswapOrigins | null>(null);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
```

Data is fetched from the backend upon component mount:

```tsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const [tokenRes, relics15Res, relics18Res, uniswapRes] = await Promise.all([
        axios.get<TokenData>(`${API_URL}/token`),
        axios.get<Relic[]>(`${API_URL}/relics/2015`),
        axios.get<Relic[]>(`${API_URL}/relics/2018`),
        axios.get<UniswapOrigins>(`${API_URL}/uniswap-origins`)
      ]);

      setTokenData(tokenRes.data);
      setRelics2015(relics15Res.data);
      setRelics2018(relics18Res.data);
      setUniswapOrigins(uniswapRes.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data. Please make sure the backend server is running.');
      setLoading(false);
    }
  };

  fetchData();
}, []);
```

### TypeScript Types

The project uses TypeScript for type safety throughout the codebase. Key type features:

- Interfaces for all data structures in `types.ts`
- Component prop typing with React.FC generic
- Type annotations for useState hooks
- Generics for API responses with axios

## Backend Architecture

### Backend Directory Structure

```
backend/
├── src/
│   └── server.ts         # Express server and API endpoints
├── dist/                 # Compiled JavaScript (after build)
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

### API Endpoints

The backend provides the following RESTful API endpoints:

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/api/token` | GET | Returns token data | TokenData object |
| `/api/relics/2015` | GET | Returns 2015 relics | Array of Relic objects |
| `/api/relics/2018` | GET | Returns 2018 relics | Array of Relic objects |
| `/api/uniswap-origins` | GET | Returns Uniswap history | UniswapOrigins object |

### Mock Data

The backend uses hardcoded mock data to simulate a real API. All data is defined in `server.ts`:

```typescript
// Example of mock data structure
const tokenData = {
  name: 'Jacky Chan Dollar',
  symbol: '$JCD',
  tagline: '2018 Relic',
  contractAddress: '0x0Ed024d39d55e486573EE32e583bC37Eb5A6271f',
  // ...other fields
};
```

## Configuration Files

### Frontend Configuration

#### `vite.config.ts`
Configures the Vite build tool with React plugin:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

#### `tsconfig.json`
TypeScript configuration for the frontend:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Backend Configuration

#### `tsconfig.json`
TypeScript configuration for the backend:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Styling Approach

The project uses Material UI's styling system with the following approaches:

1. **Theme Configuration**: A custom theme defined in `App.tsx` with dark mode and gold accent colors
2. **The `sx` prop**: Component-specific styling using MUI's `sx` prop
3. **Responsive design**: Using MUI's breakpoint system for responsive layouts
4. **Global CSS**: Minimal global styles in `index.css`

Theme example:
```typescript
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // Gold color for JCD
    },
    // ...other theme settings
  },
  // ...typography, components, etc.
});
```

Component styling example:
```tsx
<Box 
  sx={{ 
    py: { xs: 6, md: 10 }, 
    background: 'linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  {/* Component content */}
</Box>
```

## Performance Optimizations

The project includes several performance optimizations:

1. **Code Splitting**: React Router provides natural code splitting at the route level
2. **TypeScript**: Static type checking helps catch errors early
3. **Vite**: Fast development server and optimized production builds
4. **Error Boundaries**: Proper error handling to prevent cascading failures
5. **Conditional Rendering**: Components are only rendered when data is available

## Deployment Recommendations

### Frontend Deployment

1. **Build the production bundle**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Hosting options**:
   - Vercel (recommended for React apps)
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront

### Backend Deployment

1. **Build the production bundle**:
   ```bash
   cd backend
   npm run build
   ```

2. **Hosting options**:
   - Render
   - Heroku
   - AWS Lambda + API Gateway
   - Digital Ocean App Platform

### Environment Configuration

For production deployment, consider:

1. **Environment Variables**: API URLs, tokens, etc.
2. **CORS Configuration**: Update to allow only your frontend domain
3. **Real Data Integration**: Replace mock data with real API calls

## Maintenance and Updates

To maintain this project:

1. **Keep dependencies updated**: Run `npm outdated` and update as needed
2. **Add test coverage**: Consider adding Jest/React Testing Library tests
3. **Enhance documentation**: Update this document as the project evolves
4. **Monitor performance**: Use Lighthouse or similar tools to check performance

## Future Enhancements

Potential improvements to consider:

1. **Server-Side Rendering**: Convert to Next.js for SSR/SSG
2. **State Management**: Add Redux or Context API for more complex state
3. **Authentication**: Add user accounts for additional features
4. **Analytics**: Integrate analytics for user behavior tracking
5. **Real-time Data**: Add WebSocket connections for real-time token prices

---

✅ Ecco un report ordinato e tecnico da mandare al tuo dev!

---

**📋 Deploy Report - \$JCD Frontend on Vercel**
Data: 25/05/2025
Autore: \[Il tuo nome o ruolo]

---

### ✅ Risolto in deploy:

Abbiamo forzato l’installazione con:

```bash
npm install --legacy-peer-deps
```

👉 Ciò ha risolto l’errore di **peer dependency conflict** tra `@mui/material` e `@mui/lab`.

---

### ⚠️ Warning e moduli deprecati riscontrati:

| Modulo                                  | Status                     | Messaggio                                                                                                           |
| --------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **rimraf\@3.0.2**                       | ⚠️ deprecato               | "Rimraf versions prior to v4 are no longer supported"                                                               |
| **inflight\@1.0.6**                     | ⚠️ deprecato e memory leak | "This module is not supported, and leaks memory. Check out lru-cache"                                               |
| **glob\@7.2.3**                         | ⚠️ deprecato               | "Glob versions prior to v9 are no longer supported"                                                                 |
| **@humanwhocodes/object-schema\@2.0.3** | ⚠️ deprecato               | "Use @eslint/object-schema instead"                                                                                 |
| **@humanwhocodes/config-array\@0.13.0** | ⚠️ deprecato               | "Use @eslint/config-array instead"                                                                                  |
| **eslint\@8.57.1**                      | ⚠️ versione EOL            | "This version is no longer supported. See [https://eslint.org/version-support](https://eslint.org/version-support)" |

---

### 🔧 Azioni richieste:

1️⃣ **Aggiornare pacchetti deprecati**:

* `rimraf` → aggiorna a `^4.0.0`
* `glob` → aggiorna a `^9.0.0`
* `eslint` → aggiorna a una versione supportata (es. `9.x`)
* `@humanwhocodes/*` → sostituire con le controparti `@eslint/*`
* Rimuovere/aggiornare `inflight` (usare `lru-cache` se necessario).

---

2️⃣ **Verificare compatibilità MUI**:

* Attualmente:

  * `@mui/material` v5
  * `@mui/lab` v7 beta → richiede MUI v7
* Soluzioni:

  * 🔧 Downgrade `@mui/lab` a `5.0.0-alpha.125` per MUI v5
  * 🔧 Oppure aggiornare tutto a MUI v7 (più lavoro → future-proof).

---

3️⃣ **Verifica generale**:

* Eseguire `npm audit fix` per eventuali altre vulnerabilità.
* Fare un test E2E sul frontend per assicurarsi che le funzionalità non siano rotte da questi warning.

---

### 🔥 Note finali:

* Il deploy **funziona** grazie a `--legacy-peer-deps`, ma è **una toppa temporanea**.
* Suggeriamo di allineare e aggiornare tutte le dipendenze per una **build stabile e sicura**.
