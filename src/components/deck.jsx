import { useDeck } from '@/hooks/usePokemonDeck'
import { Card } from './card.jsx'

export function Deck () {
  const deck = useDeck()

  return (
    <div className='flex flex-col items-center w-[54rem] bg-gray-800 text-white rounded-lg p-2'>
      <h2 className='text-3xl my-4'>Deck</h2>
      <ul className='flex justify-evenly gap-4 px-4 text-center w-full my-2'>
        <li>Pokémons: {deck.length.Pokémon}</li>
        <li>Energies: {deck.length.Energy}</li>
        <li>Trainers: {deck.length.Trainer}</li>
      </ul>
      <ul className={'grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-2 justify-center w-full rounded-lg [&:not(:empty)]:p-2 bg-gray-700'}>
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
