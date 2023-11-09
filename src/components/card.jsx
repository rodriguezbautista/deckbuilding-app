import { useDeckDispatch } from '@/hooks/usePokemonDeck'

export function Card ({ card }) {
  const dispatch = useDeckDispatch()

  return (
    <li className='flex justify-center items-center'>
      <div className='relative w-32'>
        <img src={card.images.small} alt='' />
        <div className='flex justify-evenly absolute bottom-3 w-full'>
          <button
            className='p-1 bg-orange-500 h-8 w-8 rounded-full'
            onClick={() => dispatch({
              type: 'remove',
              card
            })}>-1</button>
          <span className='bg-black h-8 w-8 rounded-full p-1 text-center'
            >{card.copies}</span>
          <button
            className='p-1 bg-orange-500 h-8 w-8 rounded-full'
            onClick={() => dispatch({
              type: 'add',
              card
            })}
            style={(card.copies === card.maxCopies) ? { visibility: 'hidden' } : null}>+1</button>
        </div>
      </div>
    </li>
  )
}
