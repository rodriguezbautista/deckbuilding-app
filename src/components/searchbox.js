import { useState } from 'react'
import { useDeckDispatch } from '@/hooks/usePokemonDeck'
import { useGetCardlist } from '@/hooks/useGetCardlist'

export function SearchBox () {
  const [searchText, setSearchtext] = useState('')

  return (
  <div className='flex flex-col items-center bg-gray-700 w-20 h-min'>
    <SearchBar
      searchText={searchText}
      onSearchtextChange={setSearchtext} />
    <CardList
      searchText={searchText} />
  </ div>
  )
}
 
function SearchBar ({ searchText, onSearchtextChange }) {
  return (
    <form className='flex justify-center w-full'>
      <input
        className='bg-inherit py-0.25 px-1 my-0.5 border-none'
        type="text"
        placeholder="Search cards..."
        value={searchText}
        onChange={(e) => onSearchtextChange(e.target.value)} />
    </form>
  )
}

function CardList ({ searchText }) {
  const [cardlist, setCardlist] = useState()
  const dispatch = useDeckDispatch()

  useGetCardlist(searchText, setCardlist)

  function handleCardSubmit (card) {
    dispatch({
      type: 'add',
      card
    })
  }

  return (
    <>
      <ul className='searchbox-cardlist'>
        {cardlist?.data.map(card =>
          <li className='searchbox-cardlist-item' id={card.id} key={card.id} onClick={() => handleCardSubmit(card)}>
            <span>{card.name}</span>
            <span>{card.id}</span>
          </li>)}
      </ul>
    </>
  )
}
