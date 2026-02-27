// src/components/Profile.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}

export default Profile;