import React from 'react';
import notFoundImg from '../../img/pokeNotFound.png'
import './NotFound.css';

export default function NotFound () {
    return <div className='containerNot'>
        <img src={notFoundImg} alt="not found" height="269px" width="300px"/>
        <h2>Please try another name, it only finds correct names</h2>
    </div>
}
