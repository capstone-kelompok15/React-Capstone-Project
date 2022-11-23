import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Fitur from '../pages/Fitur';
import Testimoni from '../pages/Testimoni';
import Harga from '../pages/Harga';

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/fitur' element={<Fitur/>}/>
      <Route exact path='/testimoni' element={<Testimoni/>}/>
      <Route exact path='/harga' element={<Harga/>}/>
    </Routes>
  )
}

export default Router