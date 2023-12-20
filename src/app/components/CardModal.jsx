import { useEffect, useRef } from 'react'

export function CardModal ({ card }) {
  const modal = useRef(null)
  const showModalBtn = useRef(null)
  const closeModalBtn = useRef(null)

  useEffect(() => {
    if (showModalBtn && showModalBtn.current) {
      showModalBtn.current.addEventListener('click', () => {
        modal.current.showModal()
        closeModalBtn.current.addEventListener('click', () => {
          modal.current.close()
        })
      })
    }
  }, [])

  return (
    <>
      <button ref={showModalBtn} className='card-modal-showbtn'>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      </button>
      <dialog ref={modal} className='card-modal'>
        <img className='card-img-large' src={card.images.large} alt={card.name + ' image'} />
        <button ref={closeModalBtn} className='card-modal-closebtn'>x</button>
        <div className='card-modal-details'>
          <h1>{card.name}{(card.supertype === 'Pokémon') && <img className='energy-icon' src={`/${card.types[0]}-energy.PNG`} />}</h1>
          <h2>{card.set.name}</h2>
          <h3>Card type: <span>{card.supertype}</span></h3>
          <h3>Subtype: <span>{card.subtypes.join(', ')}</span></h3>
          {(card.supertype === 'Pokémon') &&
            <>
              <h3>Pokemon Type: <span>{card.types}</span></h3>
              {
                card.abilities &&
                <>
                  <h3>{card.abilities[0].type + ' ' + card.abilities[0].name}</h3><p>{card.abilities[0].text}</p>
                </>
              }
              {
                card.attacks &&
                <ul>
                  {
                  card.attacks.map((attack) =>
                    <li key={attack.name}>
                      <h3>{attack.name}
                        <div>
                          {attack.cost.map((e, index) => <img className='energy-icon' key={index} src={`/${e}-energy.PNG`} />)}
                        </div>
                        {attack.damage}</h3>
                      <p>{attack.text}</p>
                    </li>
                  )}
                </ul>
              }
              {
                card.resistances &&
                <>
                  <h3>Resistance: <img className='energy-icon' src={`/${card.resistances[0].type}-energy.PNG`} /> {card.resistances[0].value}</h3>
                </>
              }
              {
                card.weaknesses &&
                <>
                  <h3>Weakness: <img className='energy-icon' src={`/${card.weaknesses[0].type}-energy.PNG`} /> {card.weaknesses[0].value}</h3>
                </>
              }
              <h3>Retreat Cost: {card.convertedRetreatCost}</h3>
            </ >
          }
        </div>
      </dialog>
    </>
  )
}
