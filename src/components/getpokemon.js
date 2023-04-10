import React, { useState } from "react"
import axios from "axios"

const GetPokemon = props => {
    const { pokemon, setPokemon } = props
    const onClick = e => {
        console.log("it wokrs")
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807").then(response => {
            let results = response.data.results.map(p => p.name)//gets the objects and puts in a loop to be able to grab the name
            console.log(results)
            setPokemon(results)
        }).catch(err => { console.log(err) })
    }
return (
    <div className="App dark:bg-black text-gray-500 dark:text-white">
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Show Em ALL!
        </button>
    </div>
)
}



export default GetPokemon