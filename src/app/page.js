'use client'

import { DeckProvider } from '@/hooks/usePokemonDeck'
import { SearchBox } from './searchbox'
import { Deck } from './deck'

export default function Home () {
  return (
    <DeckProvider>
      <div className="App">
        <SearchBox />
        <Deck />
      </div>
    </DeckProvider>
  )
}
