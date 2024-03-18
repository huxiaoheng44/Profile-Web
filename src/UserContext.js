import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);

  const [shouldBlink, setShouldBlink] = useState(false);

  const triggerBlink = () => {
    setShouldBlink(true);
    setTimeout(() => setShouldBlink(false), 1000); // Reset after a short delay
  };

  const value = {
    userId,
    setUserId,
    userName,
    setUserName,
    userAvatar,
    setUserAvatar,
    shouldBlink,
    triggerBlink,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
