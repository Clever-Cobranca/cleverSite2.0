import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home/Index'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StrictMode>,
)
