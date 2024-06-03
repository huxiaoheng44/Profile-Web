import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/buttons/GoogleLogin";
import GoogleLogoutButton from "../components/buttons/GoogleLogout";
import { useEffect } from "react";
import { useUser } from "../UserContext";

import "./NavBar.css";

const NavBar = () => {
  const {
    userId,
    shouldBlink,
    userName,
    userAvatar,
    setUserId,
    setUserAvatar,
    setUserName,
  } = useUser();

  useEffect(() => {
    const userName = sessionStorage.getItem("userName");
    const userAvatar = sessionStorage.getItem("userAvatar");
    const userId = sessionStorage.getItem("userId");

    if (userId) {
      setUserName(userName);
      setUserAvatar(userAvatar);
      setUserId(userId);
    }
  }, []);

  //monitor the shouldBlink state
  useEffect(() => {
    console.log("shouldBlink:", shouldBlink);
  }, [shouldBlink]);

  return (
    <nav>
      <div className="Navbar-title">Xiaoheng</div>
      <div className="Navbar-linkContainer">
        <div className={shouldBlink ? "animate-bounce" : ""}>
          {userId ? <GoogleLogoutButton /> : <GoogleLoginButton />}
        </div>
        <div className="flex justify-center">
          <Link to="/devLog" className="Navbar-link">
            Dev Log
          </Link>
          <Link to="/guestboard" className="Navbar-link">
            GuestBoard
          </Link>
          <Link to="/photoPost" className="Navbar-link">
            PhotoPost
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
