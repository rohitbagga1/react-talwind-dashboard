import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

export function PrivateRoute({ children }) {
  const { user } = useAuth(); 

  if (!user) {
    return <Navigate to="/auth/sign-in" />;
  }

  return children;
}
