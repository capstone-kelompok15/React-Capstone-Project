import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { Navbar, Home, Fitur } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Fitur />
    </div>
  );
}

export default App;
