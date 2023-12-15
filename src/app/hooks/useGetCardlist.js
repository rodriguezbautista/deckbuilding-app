import { useEffect } from 'react'
import pokemon from 'pokemontcgsdk'

export function useGetCardlist (searchText, setCardlist, equivalences) {
  useEffect(() => {
    const getData = setTimeout(() => {
      if (searchText.length) {
        pokemon.card.where({
          q: `legalities.standard:legal 
            (name:"${searchText}" ${(searchText === searchText.replace(/\s+/g, '')) ? `OR name:${searchText}*` : ''})`,
          select: 'images,id,name,set,supertype,subtypes',
          orderBy: '-set.id,id',
          pageSize: 64
        })
          .then(res => res.data)
          .then(data => {
            setCardlist(data.map(card => {
              // Standarization of set and card ids
              const set = { ...card.set, id: equivalences[card.set.id] }
              let id = card.id.slice(card.id.indexOf('-'))
              id = equivalences[card.set.id] + ' ' + id.slice(/\d/.exec(id).index)

              return { ...card, id, set }
            }))
          })
          .catch(setCardlist())
      } else setCardlist()
    }, 300)

    return () => clearTimeout(getData)
  }, [searchText])
}
