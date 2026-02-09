import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-2 mt-3">
      <div className="card border-0 shadow-sm p-2">
        <div className="input-group input-group-lg">
          <span className="input-group-text bg-[#0f0f0f] border-0">🔍</span>
          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Search expenses by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
