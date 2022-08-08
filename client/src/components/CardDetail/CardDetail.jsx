import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../store/actions";
import loading from '../../img/pokEspera2.gif';
import './CardDetail.css'

export default function CardDetail() {

    const dispatch = useDispatch();
    const pokeID = useParams();
    
    let pokemon = useSelector ((state) => state.detailPokemon)
        
    useEffect(() => {
        dispatch(getDetails(pokeID.id))
    }, [dispatch])


    return (
        <div className="backgroundDetails">
            <Link className="title" to="/home">
                <h3>Home</h3>
            </Link>
            {
                pokemon.length === 0 ?
                <div>
                    <p className="noPoke">Loading...</p>
                    <img src={loading} alt="Not Poke" />
                </div>
                : <div className="pokeDetails">
                    <div className="leftDetails">
                        <h3>Life Power: {pokemon[0].life}</h3>
                        <h3>Attack: {pokemon[0].attack}</h3>
                        <h3>Defense: {pokemon[0].defense}</h3>
                        <h3>Speed: {pokemon[0].speed}</h3>
                        <h3>ID: {pokemon[0].id}</h3>
                    </div>

                    <div className="centerDetails">
                        <h1 className="pkname">Pokemon: {pokemon[0].name.toUpperCase()}</h1>
                        <img className="pkimg" src={pokemon[0].image2} alt="PokeImage" height="250px" width="250px" />
                        <img className="pkimg" src={pokemon[0].image} alt="PokeImage" height="250px" width="250px" />
                        <img className="pkimg" src={pokemon[0].image3} alt="PokeImage" height="250px" width="250px" />
                                         
                    </div>

                    <div className="rightDetails">
                        <h3>Height: {pokemon[0].height}</h3>
                        <h3>Weight: {pokemon[0].weight}</h3>
                        <h3>Types: {pokemon[0].Types.map(t => (<li>{t.name.toUpperCase()}</li>))}</h3>
                    </div>
                </div>
                
            }
        </div>
    )
}