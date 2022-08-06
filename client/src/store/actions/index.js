import axios from "axios"

export const GET_POKEMONS = "GET_POKEMONS"
export const SEARCH_POKEMONS = "SEARCH_POKEMONS"
export const ORDER_BY_ABC = "ORDER_BY_ABC";
export const ORDER_BY_POWER = "ORDER_BY_POWER";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPES = "FILTER_TYPES";
export const FILTER_CREATE = "FILTER_CREATE";

const api = "http://localhost:3001";

export function getTypes () {
    return function(dispatch) {
        return axios.get(`${api}/types`)
        .then(t => {
            dispatch({
                type: GET_TYPES,
                payload: t.data 
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function getPokemons() {
    return function(dispatch) {
        return axios.get(`${api}/pokemons`)
        .then(pokemons => {
            dispatch({
                type: GET_POKEMONS,
                payload: pokemons.data 
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function searchPokemon(payload) {
    return {
        type: SEARCH_POKEMONS,
        payload
    }
}

export function orderByAbc (payload) {
    return {
        type: ORDER_BY_ABC,
        payload
    }
}

export function orderByPower (payload) { 
    return {
        type: ORDER_BY_POWER,
        payload
    }
}

export function filterByType (payload) { 
    return {
        type: FILTER_TYPES,
        payload
    }
}

export function filterByCreate (payload) { 
    return {
        type: FILTER_CREATE,
        payload
    }
}