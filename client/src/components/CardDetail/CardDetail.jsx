import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { emptyShowPokemons, getDetails } from "../../store/actions";
import loading from '../../img/pokEspera2.gif';
import pokemonCard from '../../img/pokemonCard.png';
import './CardDetail.css'

export default function CardDetail() {

    const dispatch = useDispatch();
    const pokeID = useParams();

    dispatch(emptyShowPokemons());
    
    let pokemon = useSelector ((state) => state.detailPokemon)
        
    useEffect(() => {
        dispatch(getDetails(pokeID.id))
    }, [dispatch])


    return (
        <div className="backgroundDetails">
            <Link to="/home">
                <button className="CDtitle">Home</button>
            </Link>
            {
                pokemon.length === 0
                ? <div>
                    <p className="noPoke">Loading...</p>
                    <img src={loading} alt="Not Poke" />
                </div>
                : <div className="pokeDetails">
                    <div className="pokeCard">
                        <img className="cardImg" src={pokemonCard} alt="pokemonCard" height="540px" />
                        <h1 className="name">{pokemon[0].name.toUpperCase()}</h1>
                        <img className="pkimg1" src={pokemon[0].image} alt="PokeImage" height="180px" width="180px"/>
                        <div className="lifeBox">
                            <h3 className="textLife">Power</h3>
                            <h3 className="valueBox">{pokemon[0].life}</h3>
                        </div>
                        <div className="attackBox">
                            <h3 className="textAttack">Attack</h3>
                            <h3 className="valueBox">{pokemon[0].attack}</h3>
                        </div>
                        <div className="defenseBox">
                            <h3 className="textDefense">Defense</h3>
                            <h3 className="valueBox">{pokemon[0].defense}</h3>
                        </div>
                        <div className="idBox">
                            <h3 className="textId">ID</h3>
                            <h3 className="valueId">{pokemon[0].id}</h3>
                        </div>
                    </div>
                        
                    <div className="moreImg">
                        <img className="pkimg2" src={pokemon[0].image2} alt="PokeImage" height="250px" width="250px" />
                        <img className="pkimg3" src={pokemon[0].image3} alt="PokeImage" height="250px" width="250px" />
                    </div>

                    <div className="morePokemonData">
                        <h3>Speed: {pokemon[0].speed}</h3>
                        <h3>Height: {pokemon[0].height}</h3>
                        <h3>Weight: {pokemon[0].weight}</h3>
                        <div>
                            <h3>Types:</h3>
                            <div className="typesText">{pokemon[0].Types.map(t => (<h3 className="typeName">{t.name.toUpperCase()}</h3>))}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
                    

                
                                         

                