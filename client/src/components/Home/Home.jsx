import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, resetPokemonDetail } from "../../store/actions";
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination"
import loading from '../../img/pokEspera.gif';
import notPoke from '../../img/waitingResponse.gif';
import { Link } from "react-router-dom";
import './Home.css' 

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
        dispatch(getTypes())
        dispatch(resetPokemonDetail([]))
    }, [dispatch] )
        
    return <div className="backgroundHome">
        <div className="sfc">
            <SearchBar/>
            <Nav types={allTypes} setOrder={setOrder} setCurrentPage={setCurrentPage}/>
            <Link to = '/pokemons/create'>
                <button className='createButton'>Create your Pokemon</button>
            </Link>
        </div>
        <Pagination pokeNumbers={allPokemons.length}
                    PokeXPage={PokeXPage}
                    paginado={paginado}
                    currentPage = {currentPage}
        />

        { 
            allPokemons.length  
                ? allPokemons[0].msg === "no pokemons"  
                    ? <div>
                        <img src={notPoke} alt="0 DB pokemons" height="379px"/>
                        <h2 className="msgCategory">No pokemon in this category, please try another</h2>
                    </div>
                    : <Cards pokemons={pokePage}/>
                : <div className='loadingCountainer'>
                    <p className='loadingText'>Loading Pokemons...</p>
                    <img src={loading} alt="loading.gif" width="500px" height="346px"/> 
                </div>
        }
        <div className="footer">
            Developed by Adrian Quintana
        </div>
    </div>
}