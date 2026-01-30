import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-10">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-8 text-center">
        GitHub User Search
      </h1>

      {/* Search Component */}
      <Search />
    </div>
  );
}

export default App;
