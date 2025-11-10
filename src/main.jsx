// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root #root tidak ditemukan')

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
