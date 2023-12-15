import React, { useState } from 'react'
import { useDeckDispatch } from '@/app/hooks/useDeck'
import { useGetCardlist } from '@/app/hooks/useGetCardlist'
import Equivalences from '../../resources/standardSetIds.json'

export function SearchBoxCardList ({ searchText }) {
  const [cardlist, setCardlist] = useState()
  const dispatch = useDeckDispatch()

  useGetCardlist(searchText, setCardlist, Equivalences)

  function handleCardSubmit (card) {
    dispatch({
      type: 'add',
      card
    })
  }

  return (
    <>
      <ul
        id={'searchbox-cardlist'}
        className={'searchbox-cardlist'}>
        {cardlist?.map(card =>
          <li className='searchbox-cardlist-item'
           id={card.id} key={card.id} onClick={() => { handleCardSubmit(card) }}>
            <img src={card.images.small} alt={card.id} loading='lazy'/>
          </li>)}
        {
          cardlist &&
          <>
            <button
              className='scroll-button scroll-button-left'
              onClick={() => { document.getElementById('searchbox-cardlist').scrollBy({ left: -1, behavior: 'smooth' }) }
            }>{'<'}</button>
            <button
              className='scroll-button scroll-button-right'
              onClick={() => { document.getElementById('searchbox-cardlist').scrollBy({ left: 1, behavior: 'smooth' }) }
            }>{'>'}</button>
          </>
        }
      </ul>
    </>
  )
}
