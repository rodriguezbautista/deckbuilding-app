import { useState } from 'react'
import { useDeckDispatch } from '@/hooks/usePokemonDeck'
import { useGetCardlist } from '@/hooks/useGetCardlist'

export function SearchBox () {
  const [searchText, setSearchtext] = useState('')

  return (
  <div className='flex flex-col bg-gray-700 h-min w-80'>
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
    <form className='flex justify-center'>
      <input
        className='bg-inherit py-1 px-4 my-2 text-white border-b border-b-gray-300 text-center focus:outline-none focus:border-b-2 focus:mb-[calc(0.5rem-1px)] focus:border-b-white'
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
      <ul className='overflow-auto max-h-[32rem] empty:max-h-0'>
        {cardlist?.data.map(card =>
          <li className='flex justify-between cursor-pointer text-white p-4 w-full [&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-white hover:bg-gray-600'
           id={card.id} key={card.id} onClick={() => handleCardSubmit(card)}>
            <span>{card.name}</span>
            <span>{card.id}</span>
          </li>)}
      </ul>
    </>
  )
}
