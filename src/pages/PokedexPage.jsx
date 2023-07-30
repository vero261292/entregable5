
import {  useSelector } from "react-redux/es/hooks/useSelector"
import useFetch from "../hook/useFetch"
import { useEffect } from "react"


const PokedexPage = () => {


  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const [ pokemons, getAllPokemons ] = useFetch(url)



  useEffect(() => {
    getAllPokemons()
  }, [])

  console.log(pokemons)

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trin().toLowerCase())
  }
  const cbFilter = poke => poke.name.includes(inputValue)



  return (
    <div>
      <p><span>wolcome {trainer}</span>hare your favorite pokemon.</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      <div>
        {
          pokemons?.results.map(poke => (
            <pokeCard 
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
