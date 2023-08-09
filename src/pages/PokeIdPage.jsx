import { useEffect } from "react"
import {  useParams } from "react-router-dom"
import useFetch from "../hook/useFetch"

const PokeIdPage = () => {

  const { id } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon
  },[id])
  



  return (
    <article>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>
    </article>
  )
}

export default PokeIdPage