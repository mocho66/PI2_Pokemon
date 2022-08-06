import React from 'react';
import {useDispatch} from 'react-redux';
import { filterByCreate, filterByType, orderByAbc, orderByPower } from '../../store/actions'

export default function Nav ({types, setOrder, setCurrent}) {
       
    const dispatch = useDispatch();
    
    function handleOrderByAbc(e){
        e.preventDefault();
        dispatch(orderByAbc(e.target.value));
        setCurrent(1);
        setOrder(`Ordenado by ${e.target.value}`)
    }

    function handleOrderByPower(e){
        e.preventDefault();
        dispatch(orderByPower(e.target.value));
        setCurrent(1);
        setOrder(`Ordenado by ${e.target.value}`)
    }

    function handleFilterType(e){
        e.preventDefault();
        dispatch(filterByType(e.target.value))
        setCurrent(1);
        setOrder(`Filter by ${e.target.value}`)
    }

    function handleFilterCreate(e){
        e.preventDefault();
        dispatch(filterByCreate(e.target.value))
        setCurrent(1);
        setOrder(`Filter by ${e.target.value}`) 
    }
    
    return <div>
        <div className='filters'>
            <select className='filterAbc' onChange={(e) => handleOrderByAbc(e)}>
                <option value="all">Alphabetical Order...</option>
                <option value="asc">A to Z</option>
                <option value="desc">Z to A</option>
            </select>
            <br/>
            <select className='filterType' onChange={(e) => handleFilterType(e)}>
                <option value="all">Type Filter...</option>
                {
                    types?.map( pt => {
                        return <option value={pt.name} key={pt.id}>{pt.name}</option>
                    })
                }
            </select>
            <br/>
            <select className='filterStrength' onChange={(e) => handleOrderByPower(e)}> 
                <option value="all">Strength Order...</option>
                <option value="powerfull">Powerfull</option>
                <option value="weak">Weak</option>
            </select>
            <br/>
            <select className='filterApi' onChange={(e) => handleFilterCreate(e)}>
                <option value="all">Existent or Created Filter...</option>
                <option value="api">Existent</option>
                <option value="db">Created</option>
            </select>
            <br />
        </div>
    </div>
}