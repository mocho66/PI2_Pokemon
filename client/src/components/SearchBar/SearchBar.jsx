import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../store/actions';
import './SearchBar.css';

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

    return <div className='searchBar'>
        <form onSubmit={onSubmit}>
            <input className='textSB' type="text" onChange={onChange} value={search} />
            <input className='submitSB' type="submit" value="Search" />
        </form>
    </div>
}