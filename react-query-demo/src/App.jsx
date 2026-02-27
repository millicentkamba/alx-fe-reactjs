import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // ✅ QueryClient & QueryClientProvider
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient(); // ✅ queryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}> {/* ✅ client={queryClient} */}
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;