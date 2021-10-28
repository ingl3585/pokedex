import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Pokedex from './Pokedex';
import MyTeam from './MyTeam';
import Pokemon from './Pokemon';

function App() {
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
		const makeApiCall = (pokemonUrl) => {
			return fetch(pokemonUrl)
				.then((response) => response.json())
				.then((data) => setPokemon(data.results));
		};
		makeApiCall(pokemonUrl);
	}, []);

	return (
		<div className='App'>
			<Nav />
			<main>
				<Switch>
					<Route exact path='/' render={() => <Pokedex pokemon={pokemon} />} />
					<Route exact path='/pokedex' render={() => <Redirect to='/' />} />
					<Route
						exact
						path='/pokemon/:id'
						render={(routerProps) => (
							<Pokemon {...routerProps} pokemon={pokemon} />
						)}
					/>
					<Route exact path='/myteam' component={MyTeam} />
					<Redirect to='/' />
				</Switch>
			</main>
		</div>
	);
}

export default App;
