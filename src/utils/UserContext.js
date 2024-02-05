import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("");

  // Provide an object to context consumers
  const value = { loggedInUser, setLoggedInUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook for using this context
export const useUserContext = () => useContext(UserContext);
