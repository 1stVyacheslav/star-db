import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
// import PlanetDetails from '../planet-details';
// import StarshipDetails from '../starship-details';

// import SwapiService from '../../services/swapi-servise';



import './app.css';

export default class App extends Component {


	render() {
		return (
			<div className='container'>
				
				<Header />
				<RandomPlanet />

				<div className='row'>
					<div className='col-md-5 mb-md-0 mb-3'>
						<ItemList />
					</div>
					
					<div className='col-md-7 mt-md-0 mt-3'>
						<PersonDetails />	
					</div>			
														
				</div>
								
			</div>
		)
	}
}