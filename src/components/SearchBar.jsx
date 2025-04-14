import React from "react";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search expenses"
      value={searchTerm}
      onChange={onSearch}
    />
  );
}

export default SearchBar;

