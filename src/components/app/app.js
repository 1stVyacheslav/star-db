import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';
// import PlanetDetails from '../planet-details';
// import StarshipDetails from '../starship-details';

// import SwapiService from '../../services/swapi-service';



import './app.css';


export default class App extends Component {

	state = {
		selectedItemId: null
	}

	render() {
		return (
			<div className='container'>
				
				<Header />
				<RandomPlanet />

				<PersonPage />
				<PersonPage />
				<PersonPage />
								
			</div>
		)
	}
}