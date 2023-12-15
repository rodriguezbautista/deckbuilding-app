import React from 'react'

export function SearchBar ({ searchText, onSearchtextChange }) {
  return (
    <form className='searchbar'>
      <input
        className='searchbar-input'
        type="text"
        placeholder="Search cards..."
        value={searchText}
        onChange={(e) => onSearchtextChange(e.target.value)} />
    </form>
  )
}
