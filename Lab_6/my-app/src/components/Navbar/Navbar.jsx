import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">udemy</h2>
        <span className="nav-link">Categories</span>
      </div>

      <div className="nav-center">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search for anything" />
        </div>
      </div>

      <div className="nav-right">
        <span className="nav-link">Udemy Business</span>
        <span className="nav-link">Teach on Udemy</span>
        <span className="nav-icon">🛒</span>
        <button className="btn btn-white">Log in</button>
        <button className="btn btn-black">Sign up</button>
        <span className="nav-icon globe-icon">🌐</span>
      </div>
    </nav>
  );
};

export default Navbar;