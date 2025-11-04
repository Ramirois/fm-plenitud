import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FmPlenitudApp } from './FmPlenitudApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FmPlenitudApp />
  </StrictMode>,
)
