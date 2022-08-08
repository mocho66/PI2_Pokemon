import React from 'react';

export default function Pagination ({ pokeNumbers, PokeXPage, paginado }) {
    const pageNumber = [];

	for (let i = 1; i <= Math.ceil(pokeNumbers / PokeXPage); i++) {
		pageNumber.push(i);
	}

    return (
        <nav className="nave" >
				<ul>
					{pageNumber &&
						pageNumber.map((n) => (
							<li>
								{/* <span onClick={() => paginado(n)}>{n}</span> */}
								<button onClick={() => paginado(n)}>{n}</button>
							</li>
						))}
				</ul>
			</nav>
  )
}


