'use client'

import { DeckProvider } from '@/hooks/usePokemonDeck'
import { SearchBox } from '../components/searchbox'
import { Deck } from '../components/deck'

export default function Home () {
  return (
    <DeckProvider>
      <div className="flex flex-wrap gap-8 justify-evenly p-2 m-auto">
        <SearchBox />
        <Deck />
      </div>
    </DeckProvider>
  )
}
