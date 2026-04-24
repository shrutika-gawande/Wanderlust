import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Destinations from './pages/DestinationsPage'
import Packages from './pages/PackagesPage'
import Contact from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
