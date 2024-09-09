import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for authentication
const AuthContext = createContext();

// Create the provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Auth state
  const navigate = useNavigate();

  // Define the login function
  const login = (userData) => {
    console.log('jhjkh',userData)
    setUser(userData); // Set the authenticated user data
    navigate("/home"); // Redirect to home after login
  };

  // Define the logout function
  const logout = () => {
    setUser(null); // Clear user data
    navigate("/sign-in"); // Redirect to sign-in page
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
