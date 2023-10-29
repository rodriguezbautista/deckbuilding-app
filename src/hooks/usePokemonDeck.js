import { createContext, useContext, useReducer } from 'react'

const DeckContext = createContext(null)

const DeckDispatchContext = createContext(null)

const DECK_MAX_LENGTH = 60

export function useDeck () {
  return useContext(DeckContext)
}

export function useDeckDispatch () {
  return useContext(DeckDispatchContext)
}

export function DeckProvider ({ children }) {
  const [deck, dispatch] = useReducer(
    deckReducer,
    { Pokémon: [], Energy: [], Trainer: [], length: { Pokémon: 0, Energy: 0, Trainer: 0 } }
  )

  return (
      <DeckContext.Provider value={deck} >
        <DeckDispatchContext.Provider value={dispatch}>
                {children}
          </DeckDispatchContext.Provider>
      </DeckContext.Provider>
  )
}

function deckReducer (deck, action) {
  const card = action.card

  const supertype = card.supertype

  const addCard = () => {
    if (deck.length.Pokémon + deck.length.Energy + deck.length.Trainer === DECK_MAX_LENGTH) { return deck }
    deck.length[supertype]++
    console.log(deck.length)
    if (!deck[supertype].some(c => c.id === card.id)) {
      function maxCopies () {
        switch (card.supertype) {
          case 'Energy': switch (true) {
            case card.subtypes.some(s => s === 'Prism Star'): return 1
            case card.subtypes.some(s => s === 'Special'): return 4
            default: return 59
          };
          case 'Pokémon': switch (true) {
            case card.subtypes.some(s => s === 'Prism Star'): return 1
            case card.subtypes.some(s => s === 'Radiant'): return 1
            default: return 4
          }
          default: return 4 // eslint-disable-next-line
        }
      }
      card.maxCopies = maxCopies()
      let i = 0
      while (i < deck[supertype].length && card.name > deck[supertype][i].name) { i++ }
      return {
        ...deck,
        [supertype]: deck[supertype].toSpliced(i, 0, { ...card, copies: 1 })
      }
    }

    const j = deck[supertype].findIndex(({ id }) => id === card.id)
    if (deck[supertype][j].copies === deck[supertype][j].maxCopies) {
      return deck
    }
    return {
      ...deck,
      [supertype]: deck[supertype].toSpliced(j, 1, { ...card, copies: deck[supertype][j].copies + 1 })
    }
  }

  const removeCard = () => {
    deck.length[supertype]--
    const i = deck[supertype].findIndex(({ id }) => id === card.id)
    if (card.copies === 1) {
      return {
        ...deck,
        [supertype]: deck[supertype].toSpliced(i, 1)
      }
    }
    return {
      ...deck,
      [supertype]: deck[supertype].toSpliced(i, 1, { ...card, copies: card.copies - 1 })
    }
  }

  switch (action.type) {
    case 'add': return addCard()
    case 'remove': return removeCard()
    default: throw Error('Unknown reducer action type')
  }
}
