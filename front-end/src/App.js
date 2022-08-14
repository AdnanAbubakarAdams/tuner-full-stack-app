import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Songs from "./components/Songs";
import SongInfo from "./components/SongInfo";
import NewSong from "./components/NewSong";
import EditSong from "./components/EditSong";

function App() {
  return (
    <div className="tuner-app">
      <Router>
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<SongInfo />} />
          <Route path="/songs/new" element={<NewSong />} />
          <Route path="/songs/:id/edit" element={<EditSong />} />

          
            {/* <h1>Tuner App</h1> */}
          
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
