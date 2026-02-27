import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/profile/details">Go to Profile Details</Link>
      <br />
      <Link to="/profile/settings">Go to Profile Settings</Link>
      <br />
      <Link to="/posts/123">Go to Post 123</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;