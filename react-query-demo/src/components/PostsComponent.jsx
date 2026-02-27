import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // ✅ CACHING DEMONSTRATION
    staleTime: 1000 * 60 * 2,      // data stays fresh for 2 minutes
    cacheTime: 1000 * 60 * 5,      // cache kept for 5 minutes
    refetchOnWindowFocus: false,   // prevents auto refetch
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      {/* ✅ DATA REFETCH INTERACTION */}
      <button onClick={refetch}>
        Refetch Posts
      </button>

      <div>
        {data.slice(0, 10).map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsComponent;