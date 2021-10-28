import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
	const [pokeInfo, setPokeInfo] = useState({
		name: '',
		height: '',
		weight: '',
		type: '',
		img: '',
	});

	const thisPoke =
		props.pokemon &&
		props.pokemon.filter((pokemon) => pokemon.name === props.match.params.id);
	const thisPokeUrl = props.pokemon && thisPoke[0].url;

	const makeApiCall = (thisPokeUrl) =>
		fetch(thisPokeUrl)
			.then((response) => response.json())
			.then((data) =>
				setPokeInfo({
					name: data.name,
					height: data.height,
					weight: data.weight,
					type: data.types[0].type.name,
					img: data.sprites.front_default,
				})
			);

	useEffect(() => {
		makeApiCall(thisPokeUrl);
	}, [thisPokeUrl]);

	return (
		<div className='pokeCard' key={pokeInfo.name}>
			<img src={pokeInfo.img} alt='pokemon' />
			<h1>Name: {pokeInfo.name}</h1>
			<h3>Height: {pokeInfo.height}"</h3>
			<h3>Height: {pokeInfo.weight} lbs</h3>
			<h3>Type: {pokeInfo.type}</h3>
			<button>Add to Team</button>
		</div>
	);
};

export default Pokemon;
