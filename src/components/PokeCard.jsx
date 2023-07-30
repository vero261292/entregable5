import { useEffect } from "react"
import useFetch from "../..hook/useFetch"




const PokeCard = ({ url }) => {

    const [pokemon, getSinglePokemon ] = useFetch(url)
   
    

    useEffect(() => {
        getSinglePokemon()
    }, [])

    console.log(pokemon)

    return (
      <article>
        <header>
            <img src={pokemon?.sprites.other['official-artwordk'].font_default} alt="" />
        </header>
        <section>
            <h3>{pokemon?.name}</h3>
            <ul>
                {
                    pokemon?.types.map(typeInfo => (
                      <li key={typeInfo.type.url}>{typeInfo.type.name}</li>  
                    ))
                }
            </ul>
            <hr />
            <ul>
              {
                pokemon?.stats.map(statInfo => (
                  <li key={statInfo.url}>
                    <h4>{statInfo.stat.name}</h4>
                    <span>{statInfo.base_stat}</span>
                  </li>
                  
                ))
              }
            </ul>
        </section>
      </article>
    )
}

export default PokeCard
