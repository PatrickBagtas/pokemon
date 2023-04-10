import React from 'react'

const ShowPokemon = (props) => {
    const { pokemon } = props
    return(
        <div className="row" style={{marginTop: "20px"}}>
            <div className="col-12 text-center">
            {    
                pokemon.map( (name, i)=> (
                    <li key={ i }>{ name }</li>
                ))
            }
            </div>
        </div>
    )

}

export default ShowPokemon