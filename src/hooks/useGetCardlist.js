import { useEffect } from 'react'
import pokemon from 'pokemontcgsdk'

export function useGetCardlist (searchText, setCardlist) {
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
          .then(response => setCardlist(response))
          .catch(setCardlist())
      } else setCardlist()
    }, 300)

    return () => clearTimeout(getData)

    // eslint-disable-next-line
  }, [searchText]);
}
