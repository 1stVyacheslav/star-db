import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page';

import './app.css';

export default class App extends Component {

	render() {
		return (
			<div className='container'>
				
				<Header />
				<RandomPlanet />

				<PersonPage />

			</div>
		)
	}
}