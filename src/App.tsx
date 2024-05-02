import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import AllRoutes from './Router/AllRoutes'

function App() {
  
  return (
    <>
      <div>
      <AllRoutes/>
      </div>
    </>
  )
}

export default App
