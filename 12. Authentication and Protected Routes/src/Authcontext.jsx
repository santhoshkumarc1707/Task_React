import  { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // For simplicity, assume successful login
    setIsAuthenticated(true);
    localStorage.setItem('token', 'dummy_token'); // Store token
  };

  const logout = () => {
    // Log out logic
    setIsAuthenticated(false);
    localStorage.removeItem('token'); // Remove token
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
