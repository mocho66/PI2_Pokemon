import { Link } from 'react-router-dom'
import './Card.css'

export default function Card ({name, id, image, types}) {

    return <div className='pokemonBox'>
        <Link to={`/pokemons/${id}`}> 
            <h3 className='titlePokemon'>{name}</h3> 
        </Link>
        <div className='imgBoxPoke'>
            {/* <img src={image} alt="imagen" className='imgPoke'/> */}
            <img className='imgPoke' src={image} alt="PokeImage not found" height="140px" width="160px"/> {/**/}
        </div>
        <div className='types'>
            Types:
            {
                types.map((t) => { return <h3 className='type'> {t.name} </h3>})
            }
        </div>

    </div>
}

