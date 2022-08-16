import React from 'react';
import Card from '../Card/Card.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import './Cards.css';

export default function Cards ({pokemons}) {
    if (pokemons[0].name === "not found") {
            return <div>
                <NotFound />
            </div>
    } else return (
        <div className={pokemons.length<5 ? 'cards4' : 'cards'}>
            {
                pokemons.map((pokemon) => { 
                    return <Card 
                        name = {pokemon.name}
                        id = {pokemon.id}
                        image = {pokemon.image}
                        types = {pokemon.Types}
                        create = {pokemons.create}
                        /> 
                    })
            }
        </div> 
    )
}