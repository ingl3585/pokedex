import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<Link to='/pokedex'>
				<h3>Pokedex</h3>
			</Link>

			<Link to='/myteam'>
				<h3>My Team</h3>
			</Link>
		</nav>
	);
};

export default Nav;
