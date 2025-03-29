import React, { createContext, useContext, useState } from 'react';

const userToken = localStorage.getItem('token');
const decodedUser = userToken ? userToken : null;

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(decodedUser);

  const login = (authToken) => {
    localStorage.setItem('token', authToken);
    setUserToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserToken(null);
  };

  return (
    <UserContext.Provider value={{ userToken, setUserToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { useUserContext };
export default UserProvider;
