import React,{useState} from 'react';
import './App.css';
import ShowPokemon from './components/pokemon';
import GetPokemon from './components/getpokemon'

function App() {
  const [pokemon, setPokemon]=useState([])
  return (
    <div className="App dark:bg-black text-gray-500 dark:text-white">
      <GetPokemon pokemon={pokemon} setPokemon={setPokemon}/>
      <ShowPokemon pokemon={pokemon}/>
      </div>
  );
}

export default App;
