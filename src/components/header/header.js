import React from 'react';

import './header.css';

const Header = () => {
	return (
	<nav className='header navbar navbar-expand'>
		
		<div className='navbar-brand'>Star-DB</div>
		<div className='nav-item active'>
			<button className="nav-link btn btn-link">People</button> 
		</div>
		<div className='nav-item'>
			<button className="nav-link btn btn-link">Planets</button> 
		</div>
		<div className='nav-item'>
			<button className="nav-link btn btn-link">Starships</button> 
		</div>
		
		
	</nav>)
};

export default Header;