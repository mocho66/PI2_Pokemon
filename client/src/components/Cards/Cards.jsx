import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../Card/Card.jsx'
import { getPokemons } from '../../store/actions'
import './Cards.css'

export default function Cards () {
    
    let pokemons = useSelector((state) => state.pokemons)
    
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPokemons())
    }, [])
    // console.log(pokemons)
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