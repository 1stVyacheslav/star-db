import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
	return (
	<nav className='header navbar navbar-expand'>
		
		<Link to='/' className='navbar-brand'>Star-DB</Link>
		<div className='nav-item active'>
			<Link to='/people' className="nav-link btn btn-link">People</Link> 
		</div>
		<div className='nav-item'>
			<Link to='/planet' className="nav-link btn btn-link">Planets</Link> 
		</div>
		<div className='nav-item'>
			<Link to='/starship' className="nav-link btn btn-link">Starships</Link> 
		</div>
		
		
	</nav>)
};

export default Header;