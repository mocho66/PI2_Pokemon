import axios from "axios"
export const GET_POKEMONS = "GET_POKEMONS"
export const SEARCH_POKEMONS = "SEARCH_POKEMONS"
const api = "http://localhost:3001";

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

export function searchPokemon(name) {
    return function(dispatch) {
        return axios.get(`${api}/pokemons/?name=${name}`)
        .then((pokemon) => {
            dispatch({
                type: SEARCH_POKEMONS,
                payload: pokemon.data
            })
        })
        .catch(error => console.log(error))
    }
}

// export function getCharacters() {
//     // https://rickandmortyapi.com/api/character
//     return function(dispatch) {
//         return fetch("https://rickandmortyapi.com/api/character")
//             .then(function(response) {
//                return response.json()
//             })
//             .then(function(json) {
//                 dispatch({
//                     type: GET_CHARACTERS,
//                     payload: json.results
//                 })
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

// }

