import { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 shadow-2xl"
    >
      <FaMapMarkerAlt className="text-cyan-300 text-xl" />

      <input
        type="text"
        placeholder="Search any city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 bg-transparent text-white placeholder:text-gray-300 text-lg outline-none"
      />

      <button
        type="submit"
        className="bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 rounded-2xl font-semibold text-white hover:scale-105 transition duration-300"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;