import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="tuner-app">
      <Router>
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          
            {/* <h1>Tuner App</h1> */}
          
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
