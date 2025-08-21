import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './componentes/navbar.tsx'
import './css/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>,
)
