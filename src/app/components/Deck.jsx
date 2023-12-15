import React from 'react'
import { useDeck } from '@/app/hooks/useDeck.js'
import { Card } from './Card.jsx'

export function Deck () {
  const deck = useDeck()

  return (
    <div className='deck'>
      <h2>Deck</h2>
      <ul className='deck-info'>
        <li>Pokémons: {deck.length.Pokémon}</li>
        <li>Energies: {deck.length.Energy}</li>
        <li>Trainers: {deck.length.Trainer}</li>
      </ul>
        <ul className={'deck-list'}>
          {[deck.Pokémon, deck.Energy, deck.Trainer].map((supertype) => {
            return supertype.map((card) =>
              <Card
                card={card}
                key={card.id} />
            )
          })}
        </ul>
    </div>
  )
}
