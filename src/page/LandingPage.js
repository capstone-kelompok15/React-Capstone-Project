import React from 'react'
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Fitur from "../components/Fitur";
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Fitur />
        <Footer/>
    </div>
  )
}

export default LandingPage