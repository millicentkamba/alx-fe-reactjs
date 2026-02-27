import React from "react";
import { Navigate } from "react-router-dom";

// Simulate authentication
const isAuthenticated = () => localStorage.getItem("auth") === "true";

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;