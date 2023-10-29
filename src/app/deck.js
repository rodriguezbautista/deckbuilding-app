import { useDeck, useDeckDispatch } from '@/hooks/usePokemonDeck'

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
            <CardComponent
              card={card}
              key={card.id} />
          )
        })}
      </ul>
    </div>
  )
}

function CardComponent ({ card }) {
  const dispatch = useDeckDispatch()

  return (
    <li className='deck-card'>
      <img className='deck-card-img' src={card.images.small} alt='' />
      <div className='deck-card-buttons'>
        <button
          onClick={() => dispatch({
            type: 'remove',
            card
          })}>-1</button>
        <span>{card.copies}</span>
        <button
          onClick={() => dispatch({
            type: 'add',
            card
          })}
          style={(card.copies === card.maxCopies) ? { visibility: 'hidden' } : null}>+1</button>
      </div>
    </li>
  )
}
