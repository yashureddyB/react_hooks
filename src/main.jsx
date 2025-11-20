import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Statetutorial from './Usestate/Statetutorial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Statetutorial />
  </StrictMode>,
)
