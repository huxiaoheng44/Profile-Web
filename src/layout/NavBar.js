import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/buttons/GoogleLogin";
import GoogleLogoutButton from "../components/buttons/GoogleLogout";
import { useState } from "react";
import { useUser } from "../UserContext";

import "./NavBar.css";

const NavBar = () => {
  const {
    userId,
    userName,
    userAvatar,
    setUserId,
    setUserAvatar,
    setUserName,
  } = useUser();

  return (
    <nav>
      <div className="Navbar-title">Xiaoheng</div>
      <div className="Navbar-linkContainer">
        <div>{userId ? <GoogleLogoutButton /> : <GoogleLoginButton />}</div>
        <div>
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
      </div>
    </nav>
  );
};

export default NavBar;
