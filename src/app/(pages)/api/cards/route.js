import pokemon from 'pokemontcgsdk'
import equivalences from '../utils/standardSetIds.json'

export async function GET (req) {
  const searchParams = req.nextUrl.searchParams
  const searchText = searchParams.get('searchText')
  try {
    const { data } = await pokemon.card.where({
      q: `legalities.standard:legal 
        (name:"${searchText}" ${(searchText === searchText.replace(/\s+/g, '')) ? `OR name:${searchText}*` : ''})`,
      select: 'images,id,name,set,supertype,subtypes,types,hp,abilities,attacks,resistances,weaknesses,convertedRetreatCost',
      orderBy: '-set.id,id',
      pageSize: 64
    })
    data.forEach(card => {
      // Standarization of set and card ids
      card.set.id = equivalences[card.set.id]
      const id = card.id.slice(card.id.indexOf('-'))
      card.id = card.set.id + ' ' + id.slice(/\d/.exec(id).index)
    })
    return Response.json({ cards: data })
  } catch (err) {
    console.log(err)
    return Response.json(err)
  }
}
