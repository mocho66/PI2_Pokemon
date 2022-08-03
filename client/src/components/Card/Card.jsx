import { Link } from 'react-router-dom'
import './Card.css'

export default function Card ({name, id, image, types}) {

    return <div className='pokemonBox'>
        <Link to={`/pokemons/${id}`}> 
            <h3 className='titlePokemon'>{name}</h3> 
        </Link>
        <div className='imgBoxPoke'>
            <img src={image} alt="imagen" className='imgPoke'/>
        </div>
        {
            types.map((type) => { return <h3> {type.name} </h3>})
        }
    </div>
}

