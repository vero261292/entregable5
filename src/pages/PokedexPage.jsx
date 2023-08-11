
import {  useSelector } from "react-redux/es/hooks/useSelector"
import useFetch from "../hook/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {


  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  


  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=150'
  const [ pokemons, getAllPokemons, getPokemonByType ] = useFetch(url)



  useEffect(() => {
    if(selectValue === 'allPokemons'){
      getAllPokemons()
    } else {
      getPokemonByType(selectValue)
    }
  }, [selectValue])

  

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }


  const cbFilter = poke => {
    const filterInput = poke.name.includes(inputValue)



    return filterInput
  }



  return (
    <div>
      <p><span>wolcome {trainer}</span>hare you find your favorite pokemon.
      </p>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      <SelectType setSelectValue={setSelectValue} />
      <div>
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard 
              key={poke.url}
              url={poke.url}
            />  
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage


