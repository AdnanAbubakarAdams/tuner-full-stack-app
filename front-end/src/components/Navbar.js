import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='nav-bar'>
        <h1>
            <Link to="/">AddyMusic</Link>
            <Link to="/songs">Songs</Link>
            <Link to="/songs/new">New Song</Link>
        </h1>
    </nav>
  )
}

export default Navbar;