import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './Components/Footer.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import Body from './Pages/Body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body/>
    <Footer/>
    
  </StrictMode>,
)
