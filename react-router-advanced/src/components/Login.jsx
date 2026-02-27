// src/components/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile/details");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Simulate Login</button>
    </div>
  );
}

export default Login;