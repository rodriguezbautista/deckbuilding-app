import { useDeck } from '@/hooks/usePokemonDeck'
import Card from './card.js'

export function Deck () {
  const deck = useDeck()

  return (
    <div className='deck-container'>
      <h2>Deck</h2>
      <ul className='width-100%'>
        <li>Pokémons: {deck.length.Pokémon}</li>
        <li>Energies: {deck.length.Energy}</li>
        <li>Trainers: {deck.length.Trainer}</li>
      </ul>
      <ul className='deck'>
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
