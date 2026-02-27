import React from "react";
import { useParams } from "react-router-dom";

function UserPost() {
  const { postId } = useParams();
  return <h3>User Post ID: {postId}</h3>;
}

export default UserPost;