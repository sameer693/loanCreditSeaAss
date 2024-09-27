import React from 'react';

const SearchContainer: React.FC = () => {
  return (
    <div className="search-container">
      <img src="search-icon.png" alt="Search" className="search-icon" />
      <span className="search-text">Search for loans</span>
    </div>
  );
};

export default SearchContainer;