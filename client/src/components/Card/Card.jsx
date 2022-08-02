import { Link } from 'react-router-dom'

export default function Card ({name, id, image, types}) {

    return <div>
        <Link to={`/pokemons/${id}`}> 
            <h3>{name}</h3> 
        </Link>
        <img src={image} alt="imagen" />
        {
            types.map((type) => { return <h3> {type.name} </h3>})
        }
    </div>
}
