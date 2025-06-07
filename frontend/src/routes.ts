// src/routes.ts
import React from 'react'
import type { LazyExoticComponent } from 'react'

// Tipologia per le rotte
interface RouteConfig {
  path: string
  Component: LazyExoticComponent<React.FC>
}

const routes: RouteConfig[] = [
  { path: '/', Component: React.lazy(() => import('./pages/ChiaraProfilePage')) },
  { path: '/gallery', Component: React.lazy(() => import('./pages/KawaiiGalleryPage')) },
  { path: '/commissions', Component: React.lazy(() => import('./pages/KawaiiCommissionsPage')) },
  { path: '/about', Component: React.lazy(() => import('./pages/KawaiiAboutPage')) },
  { path: '/contact', Component: React.lazy(() => import('./pages/KawaiiContactPage')) },
  { path: '/fairies', Component: React.lazy(() => import('./pages/KawaiiFairyPage')) },
]

export default routes
