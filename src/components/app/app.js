import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage,	PlanetPage,	StarshipPage, SecretPage, LoginPage } from '../item-page';
import SwapiService, { SwapiProvider } from '../../services/';
import { PersonDetails } from '../sw-components';

import './app.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default class App extends Component {

	swapiService = new SwapiService();

	state = {
		isLoggedIn: false
	}

	onLogin = () => {
		this.setState({
			isLoggedIn: true
		})
	}

	render() {

		const {isLoggedIn} = this.state;

		return (
			<div className='container'>

				<SwapiProvider value={this.swapiService}>

					<Router>

						<Header />
						<RandomPlanet />

						<Switch> {/* отрисовывает только первый Route, который соответствует адресу */}

							<Route 	path='/' 
											render={ () => <h2 className='text-center'>Welcom to StarDB</h2> } 
											exact />
							<Route path='/people' exact component={PeoplePage} />
							<Route 	path='/people/:id'
											render={ ( {match} ) => {
												const { id } = match.params;
												return <PersonDetails itemId={id} />
											} } />

							<Route path='/planet' component={PlanetPage} />
							<Route path='/starship/:id?' component={StarshipPage} />

							{/*Login- and Secret- Pages*/}
							<Route 	path='/secret' 
											render={ () => <SecretPage isLoggedIn={isLoggedIn}/> }/>
							<Route	 path='/login' 
											render={ () => <LoginPage 
																			isLoggedIn={isLoggedIn} 
																			onLogin={ this.onLogin } /> 
														} />
							
							{/*{<Redirect to='/' /> } - этот элемент будет отрисовываться, если не было совпадений по предыдущим Route'ам*/}

							<Route render={ () => <h2 className='text-center'>Page not found</h2> } /> {/* Route без атрибута path будет отрисовываться всегда */}

						</Switch>

					</Router>
					
				</SwapiProvider>
				
			</div>
		)
	}
}