import Card from '../Card/Card.jsx'
import './Cards.css'

export default function Cards ({pokemons}) {
    return <div className='cards'>
        {
            pokemons.map((pokemon) => { 
                return <Card 
                    name = {pokemon.name}
                    id = {pokemon.id}
                    image = {pokemon.image}
                    types = {pokemon.Types}
                    /> 
                })
        }
    </div>
}
                     