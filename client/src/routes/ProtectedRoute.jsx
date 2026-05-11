import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {

  const location = useLocation();
  const token = localStorage.getItem("token");

  // If no token, redirect to login.
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;
