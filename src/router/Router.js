import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../landingpage/LandingPage';

const Router = () => {
  return (
    <>
    <div>
        <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default Router;