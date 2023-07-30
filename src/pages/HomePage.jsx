
import { useSelector } from "react-redux"


const HomePage = () => {

  const trainer = useSelector(reducer => reducer.trainer)

  console.log(trainer);


  return (
    <div>
      <h1>Pokedex</h1>
      <h2>hi traider</h2>
      <p>To start with the app, give ne your name trainer 😀</p>
      <form onSubmit={handleSubmit}>
        <input id='inputTrainer' ref={inputTrainer} type="text"/>
        <button>Gotta cartch'en all!</button>
      </form>
    </div>
  )
}

export default HomePage


