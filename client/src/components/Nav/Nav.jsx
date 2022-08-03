import { useState } from "react"
import { useDispatch } from "react-redux";
import { searchPokemon } from '../../store/actions'

export default function Nav () {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    
    function onSubmit(e){
        e.preventDefault();
        dispatch(searchPokemon(search));
    }

    function onChange(e){
        e.preventDefault();
        setSearch(e.target.value)
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={search}/>
            <input type="submit" value="Buscar" />
        </form>  
    </div>
}