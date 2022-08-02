import { GET_POKEMONS, SEARCH_POKEMONS } from "../actions"

const initialState = {
    pokemons: [],
    filteredPokemons: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS: 
            return {
                ...state,
                pokemons: action.payload
            }
        case SEARCH_POKEMONS:
            return {
                ...state,
                filteredPokemons: action.payload
            }
        default:
            return state
    }
}

export default reducer