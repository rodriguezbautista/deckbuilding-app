import { useEffect } from 'react'

export function useGetCardlist (searchText, setCardlist, equivalences) {
  useEffect(() => {
    const getData = setTimeout(async () => {
      if (searchText.length) {
        try {
          const response = await fetch(`api/cards?searchText=${searchText}`)
          const { cards } = await response.json()
          setCardlist(cards)
        } catch { setCardlist() }
      } else setCardlist()
    }, 300)

    return () => clearTimeout(getData)
  }, [searchText])
}
