import { useEffect } from "react"
import { useFetch, useParams } from "react-router-dom"

const PokeIdPage = () => {

  const { id } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon
  },[])
  console.log(pokemon);



  return (
    <article>
      <img src={pokemon?.sprites} alt="" />
    </article>
  )
}

export default PokeIdPage