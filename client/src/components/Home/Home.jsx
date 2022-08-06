import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, resetPokemonDetail, resetPokemons } from "../../store/actions";
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import loading from '../../img/pokEspera.gif';
import { Link } from "react-router-dom";

export default function Home () {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(1)
    const [order, setOrder] = useState("")

    const allPokemons = useSelector((state) => state.showPokemons)
    const allTypes = useSelector((state) => state.types)

    // useEffect ( () => {
    //     dispatch(resetPokemons())
    // }, [dispatch] )

    useEffect ( () => {
        dispatch(getPokemons())
    }, [dispatch] )
        
    useEffect ( () => {
        dispatch(getTypes())
    }, [dispatch] )

    useEffect ( () => {
        dispatch(resetPokemonDetail([]))
    }, [dispatch] )

    return <div>
        <SearchBar/>
        <Nav types={allTypes} setOrder={setOrder} setCurrent={setCurrent}/>
        <Link to = '/pokemons/create'>
            <button className='create'> Crea tu propio Pokemon</button>
        </Link>
        { 
            allPokemons.length  ? <Cards pokemons={allPokemons}/>
                                : <div>
                                    <p className='loading'>Loading Pokemons...</p>
                                    <img src={loading} alt="loading.gif" width="500px" height="346px"/> 
                                </div>
        }
    </div>
}