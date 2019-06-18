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
			<div>
				<Header />
				<RandomPlanet />
				<ItemList />
				<PersonDetails />
				
			</div>
		)
	}
}