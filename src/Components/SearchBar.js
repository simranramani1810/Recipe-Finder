import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
      style={{width:"300px", height:"25px", border:"1px solid black"}}
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" style={{height:"30px" ,width:"70px", boxShadow:"1px 1px 5px black", border:"none", color:"white", background:"blue", fontSize:"16px"}}>Search</button>
    </form>
  );
}

export default SearchBar;
