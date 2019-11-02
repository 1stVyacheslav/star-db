import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ( {page, onChangePage} ) => {

	const classList='nav-item',
				classActive='nav-item active';
	
	console.log(page)

	const peopleClassList = (page === 'people') ? classActive : classList,
				planetsClassList = (page === 'planet') ? classActive : classList,
				starshipsClassList = (page === 'starship') ? classActive : classList;

	return (
	<nav className='header navbar navbar-expand' onClick={ (e) => onChangePage(e) } >
		
		<Link to='/' className='navbar-brand'>Star-DB</Link>
		<NavItem 	classList={peopleClassList} 
							linkTo='/people/' 
							label='People' />
		<NavItem 	classList={planetsClassList} 
							linkTo='/planet/' 
							label='Planets' />
		<NavItem 	classList={starshipsClassList} 
							linkTo='/starship/' 
							label='Starships' />
							
		{/* <div className={classList}>
			<Link to='/people/' className="nav-link btn btn-link">People</Link> 
		</div>
		<div className={classList}>
			<Link to='/planet/' className="nav-link btn btn-link">Planets</Link> 
		</div>
		<div className={classList}>
			<Link to='/starship/' className="nav-link btn btn-link">Starships</Link> 
		</div>
		<div className={classList}>
			<Link to='/login/' className="nav-link btn btn-link">Login</Link> 
		</div>
		<div className={classList}>
			<Link to='/secret/' className="nav-link btn btn-link">Secret</Link> 
		</div> */}
		
		
	</nav>)
};

function NavItem( {classList, linkTo, label} ) {
	return (
		<div className={classList}>
			<Link to={linkTo} className="nav-link btn btn-link">{label}</Link> 
		</div>
	)
}

export default Header;