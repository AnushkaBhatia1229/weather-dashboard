import { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city.trim());
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          gap: "15px",
        }}
      >
        <FaMapMarkerAlt
          size={28}
          color="#1565ff"
        />

        <input
          className="search-input"
          type="text"
          placeholder="Search any city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button
        className="search-btn"
        type="submit"
      >
        <FaSearch
          style={{ marginRight: "10px" }}
        />
        Search
      </button>
    </form>
  );
};

export default SearchBar;