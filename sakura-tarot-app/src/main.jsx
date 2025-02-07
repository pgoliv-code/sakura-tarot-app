import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageWelcome from './pages/welcome-page/welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageWelcome />
  </StrictMode>,
)
