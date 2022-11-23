import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Testimoni from "./components/Testimoni";
import Harga from "./components/Harga";
import Fitur from "./components/Fitur";
import Home from "./components/Home";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/fitur' element={<Fitur/>}/>
      <Route exact path='/testimoni' element={<Testimoni/>}/>
      <Route exact path='/harga' element={<Harga/>}/>
    </Routes>
    </>
  );
}

export default App;
