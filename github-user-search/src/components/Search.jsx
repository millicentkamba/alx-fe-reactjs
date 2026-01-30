import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await searchUsers(username, location, minRepos);
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl px-4">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-gray-800 p-6 rounded-lg flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded text-black"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 rounded text-black"
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 rounded text-black"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
        >
          Search
        </button>
      </form>

      {/* API States */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Results Display (MAP REQUIRED BY ALX) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 p-4 rounded flex flex-col items-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mb-2"
            />
            <h3 className="font-bold">{user.login}</h3>
            {user.location && <p>{user.location}</p>}
            <p>Repos: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
