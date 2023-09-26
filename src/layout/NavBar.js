import React from "react";
import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = () => {
  return (
    
    <nav>
      <div className="Navbar-title">
        Xiaoheng
      </div>
      <div className="Navbar-linkContainer">
        <Link to="/devLog" className="Navbar-link">
          Dev Log
        </Link>
        <Link to="/guestboard" className="Navbar-link">
          GuestBoard
        </Link>
        <Link to="/profile" className="Navbar-link">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
