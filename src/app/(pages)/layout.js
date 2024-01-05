import { Inter } from 'next/font/google'
import React from 'react'
import '../styles/globals.css'
import { NavBar } from '@/app/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokemon Deckbuilder',
  description: 'Build and share pokemon decks!'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header>
          <NavBar />
        </header>
        <main className="app container">
          {children}
        </main>
      </body>
    </html>
  )
}
