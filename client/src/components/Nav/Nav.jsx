import React from 'react';
import {useDispatch} from 'react-redux';
import { filterByCreate, filterByType, orderByAbc, orderByPower } from '../../store/actions'
import './Nav.css';

export default function Nav ({types, setOrder, setCurrentPage}) {
       
    const dispatch = useDispatch();
    
    function handleOrderByAbc(e){
        e.preventDefault();
        dispatch(orderByAbc(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado by ${e.target.value}`)
    }

    function handleOrderByPower(e){
        e.preventDefault();
        dispatch(orderByPower(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado by ${e.target.value}`)
    }

    function handleFilterType(e){
        e.preventDefault();
        dispatch(filterByType(e.target.value))
        setCurrentPage(1);
        setOrder(`Filter by ${e.target.value}`)
    }

    function handleFilterCreate(e){
        e.preventDefault();
        dispatch(filterByCreate(e.target.value))
        setCurrentPage(1);
        setOrder(`Filter by ${e.target.value}`) 
    }
    
    return <div className='filters'>
        <select className='filterAbc' onChange={(e) => handleOrderByAbc(e)}>
            <option className='option0' value="all">Alphabetical Order</option>
            <option className='option' value="asc">A to Z</option>
            <option className='option' value="desc">Z to A</option>
        </select>
        <br/>
        <select className='filterType' onChange={(e) => handleFilterType(e)}>
            <option className='option0' value="all">Type Filter</option>
            {
                types?.map( pt => {
                    return <option className='option' value={pt.name} key={pt.id}>{pt.name}</option>
                })
            }
        </select>
        <br/>
        <select className='filterStrength' onChange={(e) => handleOrderByPower(e)}> 
            <option className='option0' value="all">Strength Order</option>
            <option className='option' value="powerfull">Powerfull</option>
            <option className='option' value="weak">Weak</option>
        </select>
        <br/>
        <select className='filterApi' onChange={(e) => handleFilterCreate(e)}>
            <option className='option0' value="all">API or Created Filter</option>
            <option className='option' value="api">Existent</option>
            <option className='option' value="db">Created</option>
        </select>
        <br />
    </div>
    
}