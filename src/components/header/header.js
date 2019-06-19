import React from 'react';

import './header.css';

const Header = () => {
	return (
	<nav className='navbar navbar-expand'>
		<div className='navbar-brand'>Star-DB</div>
		<ul className=' navbar-nav'>
			<li className='nav-item nav-link active'>People</li>
			<li className='nav-item nav-link'>Planets</li>
			<li className='nav-item nav-link'>Starships</li>
		</ul>

	</nav>)
};

export default Header;