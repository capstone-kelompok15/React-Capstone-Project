import React from 'react'
import Navbar from "../components/landingpage_components/Navbar";
import Home from "../components/landingpage_components/Home";
import Fitur from "../components/landingpage_components/Fitur";
import Footer from '../components/landingpage_components/Footer';

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