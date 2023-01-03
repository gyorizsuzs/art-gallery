import React from 'react'
import './Search.css'

const Search = ({ info, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="search"
        id="art-search"
        placeholder="type here..."
      />
      {info && <h3>Showing {info.totalrecords} Works</h3>}
    </div>
  )
}

export default Search
