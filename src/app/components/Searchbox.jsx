import React, { useState } from 'react'
import { SearchBar } from './Searchbar'
import { SearchBoxCardList } from './SearchBoxCardList'

export function SearchBox () {
  const [searchText, setSearchtext] = useState('')

  return (
    <div tabIndex={0} className='searchbox'>
      <SearchBar
        searchText={searchText}
        onSearchtextChange={setSearchtext} />
      <SearchBoxCardList
        searchText={searchText} />
    </ div>
  )
}
