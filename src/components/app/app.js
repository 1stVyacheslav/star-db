import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage,	PlanetPage,	StarshipPage } from '../item-page';
import SwapiService, { SwapiProvider } from '../../services/';
import { PersonDetails } from '../sw-components';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
export default class App extends Component {

	swapiService = new SwapiService();

	render() {
		return (
			<div className='container'>

				<SwapiProvider value={this.swapiService}>

					<Router>

						<Header />
						<RandomPlanet />

						<Route 	path='/' 
										render={ () => <h2>Welcom to StarDB</h2> } 
										exact />
						<Route path='/people' exact component={PeoplePage} />
						<Route 	path='/people/:id'
										render={ ( {match} ) => {
											const { id } = match.params;
											return <PersonDetails itemId={id} />
										} } />

						<Route path='/planet' component={PlanetPage} />
						<Route path='/starship/:id?' component={StarshipPage} />

					</Router>
					
				</SwapiProvider>
				
			</div>
		)
	}
}