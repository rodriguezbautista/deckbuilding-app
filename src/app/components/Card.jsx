import React from 'react'
import { useDeckDispatch } from '@/app/hooks/useDeck'

export function Card ({ card }) {
  const dispatch = useDeckDispatch()

  return (
    <li className='card'>
      <img src={card.images.small} alt='' />
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
