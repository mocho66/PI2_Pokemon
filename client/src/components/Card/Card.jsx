import { Link } from 'react-router-dom'
import './Card.css'

export default function Card ({name, id, image, types, create}) {

    return <div className='pokemonBox'>
        <h3 className='titlePokemon' text-decoration="none">{name}</h3> 
        <Link to={`/pokemons/${id}`}> 
            <div className='imgBoxPoke'>
                <img className='imgPoke' src={image} alt="PokeImage not found" height="140px" width="160px"/>
            </div>
        </Link>
        <div className='types'>
            Types:
            {
                types.map((t) => { return <h3 className='type'> {t.name} </h3>})
            }
        </div>
    </div>
}

