import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import assets from './assets/assets'

function App() {

  return (
    <div
      style={{
        backgroundColor: "#262626",
        backgroundImage: `url(${assets.background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className='min-h-screen'
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<div className='text-center mt-10 text-3xl font-bold text-white'>ABOUT US</div>} />
        <Route path="/our-work" element={<div className='text-center mt-10 text-3xl font-bold text-white'>OUR WORK</div>} />
        <Route path="/contact-us" element={<div className='text-center mt-10 text-3xl font-bold text-white'>CONTACT US</div>} />
      </Routes>
    </div>
  )
}

export default App
