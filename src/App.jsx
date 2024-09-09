import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Dashboard, Auth } from "@/layouts";
// import { AuthProvider } from "./context/AuthContent"; // Import AuthProvider
import { AuthProvider, useAuth } from "./context/AuthContext";
import SignIn from './pages/auth/sign-in.jsx';
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "itV6SAmFi6rD1pF") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
         <AuthProvider> 
            <Routes>
              <Route path="/dashboard/*" element={
                 isAuthenticated ? <Dashboard /> : <Navigate to="/auth/sign-in" />
                } />
              <Route path="/auth/*" element={
                 isAuthenticated ? <Navigate to="/dashboard/home" /> : <SignIn handleLogin={handleLogin} />
                } />
              
              <Route path="*" element={
                 isAuthenticated ?<Navigate to="/dashboard/home" replace /> : <Navigate to="/auth/sign-in" />
                } />
            </Routes>
      </AuthProvider>
  );
}

export default App;
