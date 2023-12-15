'use client'

import React from 'react'
import { DeckProvider } from '@/app/hooks/useDeck'
import { SearchBox } from '../components/Searchbox'
import { Deck } from '../components/Deck'
import '../styles/index.css'

export default function Home () {
  return (
    <DeckProvider>
        <SearchBox />
        <Deck />
    </DeckProvider>
  )
}
