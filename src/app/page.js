'use client'

import { DeckProvider } from '@/hooks/usePokemonDeck'
import { SearchBox } from '../components/searchbox'
import { Deck } from '../components/deck'

export default function Home () {
  return (
    <DeckProvider>
      <div className="flex justify-evenly w-full h-full p-2">
        <SearchBox />
        <Deck />
      </div>
    </DeckProvider>
  )
}
