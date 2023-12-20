import React, { useRef, useState } from 'react'
import { useDeckDispatch } from '@/app/hooks/useDeck'
import { useGetCardlist } from '@/app/hooks/useGetCardlist'
import Equivalences from '../../resources/standardSetIds.json'
import { CardModal } from './CardModal'

export function SearchBoxCardList ({ searchText }) {
  const [cardlist, setCardlist] = useState()
  const dispatch = useDeckDispatch()
  const cardList = useRef(null)

  useGetCardlist(searchText, setCardlist, Equivalences)

  function handleCardSubmit (card) {
    dispatch({
      type: 'add',
      card
    })
  }

  function scroll (value) {
    const containerWidth = document.querySelector('.searchbox').clientWidth
    return cardList ? cardList.current.scrollBy({ left: value * 0.9 * containerWidth, behavior: 'smooth' }) : null
  }

  return (
    <>
      <ul
        ref={cardList}
        id={'searchbox-cardlist'}
        className={'searchbox-cardlist'}>
        {
          cardlist?.map(card =>
            <li className='searchbox-cardlist-item'
            id={card.id} key={card.id} onClick={() => { handleCardSubmit(card) }}>
              <img className='card-img-small' src={card.images.small} alt={card.id} />
              <CardModal card={card}/>
            </li>)}
        {
          !!cardlist?.length &&
          <>
            <button
              className='scroll-button scroll-button-left'
              onClick={() => { scroll(-1) }
            }>{'<'}</button>
            <button
              className='scroll-button scroll-button-right'
              onClick={() => { scroll(1) }
            }>{'>'}</button>
          </>
        }
      </ul>
    </>
  )
}
