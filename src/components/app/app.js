import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemPage from '../item-page';
import SwapiService, { SwapiProvider } from '../../services/';

import './app.css';

export default class App extends Component {

	swapiService = new SwapiService();

	render() {
		return (
			<div className='container'>

				<SwapiProvider value={this.swapiService}>
					<Header />
					<RandomPlanet />

					<ItemPage />
				</SwapiProvider>
				
			</div>
		)
	}
}