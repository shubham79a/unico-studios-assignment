import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FigmaReplica from './pages/AboutSD'
import assets from './assets/assets'

function App() {
  console.log('====================================');
  console.log(assets.background_image);
  console.log('====================================');
  return (
    <div
      style={{
        backgroundColor: "#262626",
        backgroundImage: `url(${assets.background_image})`,
        backgroundSize: "cover",
    backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutsd" element={<FigmaReplica />} />
      </Routes>
    </div>
  )
}

export default App
