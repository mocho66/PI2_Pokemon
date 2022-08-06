import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes } from "../../store/actions";
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";

export default function Home () {
    const dispatch = useDispatch();
    const [order, setOrder] = useState("")

    useEffect ( () => {
        dispatch(getTypes())
    }, [dispatch] )

    useEffect ( () => {
        dispatch(getPokemons())
    }, [dispatch] )

    const allPokemons = useSelector((state) => state.showPokemons)
    const allTypes = useSelector((state) => state.types)

    return <div>
        <Nav types={allTypes} setOrder={setOrder}/>
        <Cards pokemons={allPokemons}/>
    </div>
}