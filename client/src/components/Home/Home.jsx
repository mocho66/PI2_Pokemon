import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, resetPokemonDetail, resetPokemons } from "../../store/actions";
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination"
import loading from '../../img/pokEspera.gif';
import { Link } from "react-router-dom";

export default function Home () {
    const dispatch = useDispatch();
    const [order, setOrder] = useState("")

    const allPokemons = useSelector((state) => state.showPokemons)
    const allTypes = useSelector((state) => state.types)

    // -------- Paginación ---------- //
     
    const [currentPage, setCurrentPage] = useState(1);
	const PokeXPage = 12;
	const indexlast = currentPage * PokeXPage; 
	const indexFirst = indexlast - PokeXPage; 
	const pokePage = allPokemons.slice(indexFirst, indexlast);

	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

    // ----------------------------- //

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
        <Nav types={allTypes} setOrder={setOrder} setCurrentPage={setCurrentPage}/>
        <Link to = '/pokemons/create'>
            <button className='create'> Crea tu propio Pokemon</button>
        </Link>
        <Pagination pokeNumbers={allPokemons.length}
				PokeXPage={PokeXPage}
				paginado={paginado}/>
        { 
            allPokemons.length  ? <Cards pokemons={pokePage}/>
                                : <div>
                                    <p className='loading'>Loading Pokemons...</p>
                                    <img src={loading} alt="loading.gif" width="500px" height="346px"/> 
                                </div>
        }
    </div>
}