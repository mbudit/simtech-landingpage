import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PageLoader from './components/layout/PageLoader.tsx'

// Prevent browser from restoring scroll position on back-navigation
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// Strip hash from URL (e.g. /#/about → /about) to avoid routing conflicts
if (window.location.hash) {
  window.history.replaceState(null, document.title, window.location.pathname + window.location.search)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)