import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../landingpage/LandingPage';

const Router = () => {
  return (
    <div>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
    </Routes>
    </div>
  )
}

export default Router;