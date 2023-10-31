import { useDeckDispatch } from "@/hooks/usePokemonDeck"

export default function Card ({ card }) {
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