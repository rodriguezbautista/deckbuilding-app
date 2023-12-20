import React from 'react'
import { useDeckDispatch } from '@/app/hooks/useDeck'
import { CardModal } from './CardModal'

export function Card ({ card }) {
  const dispatch = useDeckDispatch()

  return (
    <li className='card'>
      <img className='card-img-small' src={card.images.small} alt='' />
      <CardModal card={card}/>
      <div className='card-info'>
        <button
          className='card-button'
          onClick={() => dispatch({
            type: 'remove',
            card
          })}>-1</button>
        <span className='card-copies'
          >{card.copies}</span>
        <button
          className='card-button'
          onClick={() => dispatch({
            type: 'add',
            card
          })}
          style={(card.copies === card.maxCopies) ? { visibility: 'hidden' } : null}>+1</button>
      </div>
    </li>
  )
}
