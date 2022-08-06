import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../store/actions';

export default function SearchBar () {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

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