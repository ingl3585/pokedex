import React from 'react';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
	const pokeName =
		props.pokemon &&
		props.pokemon.map((pokemon) => {
			return (
				<div className='pokemon'>
					<Link className='pokemon' to={'/pokemon/' + pokemon.name}>
						<p key={pokemon.name}>{pokemon.name}</p>
					</Link>
				</div>
			);
		});

	return (
		<div>
			<div>
				<h1>Pokedex Page</h1>
				{pokeName}
			</div>
			<div>
				<Pokemon />
			</div>
		</div>
	);
};

export default Pokedex;
