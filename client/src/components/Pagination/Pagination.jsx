import React from 'react';
import { useDispatch } from 'react-redux';
import { resetPokemons } from '../../store/actions';
import './Pagination.css'

export default function Pagination ({ pokeNumbers, PokeXPage, paginado, currentPage}) {
    const dispatch = useDispatch();

	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(pokeNumbers / PokeXPage); i++) {
		pageNumber.push(i);
	}

    return (
        <nav className="nave" >
			<div className='resetBox'>
				<button className='resetButton' onClick={()=> dispatch(resetPokemons())}>RESET POKEMONS</button>
			</div>
			<div>
				<ul>
					{
						pageNumber &&
						pageNumber.map((n) => (
							<button className={currentPage === n ? 'buttonS':'buttonP'} 
									onClick={() => paginado(n)}>{n}</button>
						))
					}
				</ul>
			</div>
		</nav>
	)
}
	
				
							


