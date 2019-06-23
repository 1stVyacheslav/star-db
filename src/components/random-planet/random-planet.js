import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';

import './random-planet.css';

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false
	}

	constructor() {
		super();
		this.updatePlanet();
	}

	onPlanetLoaded = (planet) => {
		this.setState( {
			planet,
			loading: false
		} );
	};

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		})
	}

	updatePlanet() {
		const id = 15000;
		this.swapiService
				.getPlanet(id)
				.then( this.onPlanetLoaded)
				.catch(this.onError);
	}

	render() {

		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);

		const spinner = loading ? <Spinner /> : null,
					content = hasData ? <PlanetView  planet={planet}/> : null,
					errorMessage = error ? <ErrorMessage /> : null;
		
		return (
		<div className='random-planet jumbotron d-flex rounded'>

				{errorMessage}
				{spinner}
				{content}			
			
		</div>
		)
	}
};

const PlanetView = ( {planet} ) => {

	const { id, name, population, rotationPeriod, diameter } = planet;

	return (
		<React.Fragment>
			<img 	className='planet-image img-fluid' 
						src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
						alt='planet' />

			<div>
				<h4>{name}</h4>

				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className="mr-3">Population</span>
						<span>{population}</span>
					</li>
					<li className='list-group-item'>
						<span className="mr-3">Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className='list-group-item'>
						<span className="mr-3">Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
			
		</React.Fragment>
	);
}