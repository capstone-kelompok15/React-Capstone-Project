import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../page/LandingPage';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;