import React, { useEffect, useRef, useState } from "react";
import { useUser } from "../../UserContext";
//import baseURL from "../../config";

const GoogleLogoutButton = (props) => {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef();

  // Get user information from useUser
  const {
    userId,
    userName,
    userAvatar,
    setUserId,
    setUserAvatar,
    setUserName,
  } = useUser();

  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const handleLogout = () => {
    console.log("Logging out, current user info:", userId, userName);

    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userAvatar");
    sessionStorage.removeItem("userId");

    setUserId(null);
    setUserName(null);
    setUserAvatar(null);
    setShowModal(false);
    // send post request to backend
    // fetch(baseURL + "/api/logout", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ userId: userId }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("logout success");
    //   });
  };

  return (
    <>
      <div className="user-info flex flex-col justify-center">
        <div>
          <img
            src={userAvatar}
            alt="User Avatar"
            // style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            className="w-7 h-7 rounded-full"
            onClick={() => setShowModal(!showModal)}
          />
        </div>
      </div>
      {showModal && (
        <div
          ref={modalRef}
          className="absolute mt-2 p-3 bg-white shadow-lg rounded-lg"
        >
          <p>Hello, {userName}</p>
          <button
            onClick={handleLogout}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
};

export default GoogleLogoutButton;
