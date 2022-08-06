import { FILTER_CREATE, FILTER_TYPES, GET_POKEMONS, GET_POKEMONS_DETAILS, 
    GET_TYPES, ORDER_BY_ABC, ORDER_BY_POWER, RESET_DETAIL, SEARCH_POKEMONS, RESET_POKEMONS, POST_POKEMON } from "../actions"

const initialState = {
    showPokemons: [], // de aqui renderizo / tambien lo que filtro u ordeno
    initialPokemons: [], // aqui gravo todo lo que traje en un inicio
    detailPokemon: [], // detalles del pokemon
    types: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case GET_POKEMONS: 
            return {
                ...state,
                initialPokemons: action.payload,
                showPokemons: action.payload
            }
        
        case RESET_POKEMONS: 
        let rPokemons = state.initialPokemons;
        return {
            ...state,
            showPokemons: rPokemons
        }
        
        case GET_POKEMONS_DETAILS: 
        return {
            ...state,
            detailPokemon: action.payload,
        }

        case RESET_DETAIL:
            return {
                ...state,
                detailPokemon: action.payload
            }

        case SEARCH_POKEMONS:
            let allSPokemons = state.initialPokemons;
            let pokemonSearch = state.showPokemons.filter(p => p.name === action.payload);
            return {
                ...state,
                showPokemons: pokemonSearch.length  ? pokemonSearch : allSPokemons
            }

        case ORDER_BY_ABC:
            let orderPokeAbc = action.payload === "asc" 
                ?   state.showPokemons.sort(function ( a, b ) {
                        if (a.name > b.name) {
                            return 1
                        }
                        if (b.name > a.name) {
                            return -1
                        }
                        return 0
                    }) 
                :   state.showPokemons.sort(function ( a, b ) {
                        if (a.name > b.name) {
                            return -1
                        }
                        if (b.name > a.name) {
                            return 1
                        }
                        return 0
                    })
            return {
                ...state,
                showPokemons: orderPokeAbc
            }
        
        case ORDER_BY_POWER:
            let orderPokePow = action.payload === "weak"  
                ?   state.showPokemons.sort(function ( a, b ) {
                        if (a.attack > b.attack) {
                            return 1
                        }
                        if (b.attack > a.attack) {
                            return -1
                        }
                        return 0
                    }) 
                :   state.showPokemons.sort(function ( a, b ) {
                        if (a.attack > b.attack) {
                            return -1
                        }
                        if (b.attack > a.attack) {
                            return 1
                        }
                        return 0
                    })
            return {
                ...state,
                showPokemons: orderPokePow
            }
        
        case FILTER_TYPES:
            let allTPokemons = state.initialPokemons;
            let filTPokemons = allTPokemons.filter( pt => pt.Types.map( p => p.name ).includes( action.payload ))
            const filterPokemons = action.payload === "all" ? allTPokemons : filTPokemons
            return {
                ...state,
                showPokemons: filterPokemons
            }
        
        case FILTER_CREATE:
            let filCPokemons;
            if (action.payload === "all") { filCPokemons = state.initialPokemons; };
            if (action.payload === "api") { filCPokemons = state.initialPokemons.filter(p => p.create === false) };
            if (action.payload === "db") { filCPokemons = state.initialPokemons.filter(p => p.create === true) };
            return {
                ...state,
                showPokemons: filCPokemons
            }
        
        case POST_POKEMON:
            return {
                ...state,
            }

        default:
            return state
    }
}

export default rootReducer