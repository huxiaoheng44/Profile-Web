import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);

  const value = {
    userId,
    setUserId,
    userName,
    setUserName,
    userAvatar,
    setUserAvatar,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
