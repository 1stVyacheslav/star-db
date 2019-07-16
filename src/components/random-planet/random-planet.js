import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import { withContext } from '../hoc';

import './random-planet.css';

 class RandomPlanet extends Component {

	//Установка значений props по умолчанию
	static defaultProps = {
		updateInterval: 10000
	}

	//Проверка типа props
	static typeProps = { //объект свойство: функция-проверка (props, свойство, компонент)
		updateInterval: (props, propsName, componentName) => {
		const value = props[propsName];

		if ( typeof value === 'number' && !isNaN(value) ) {
			// возвращает null если, свойство нужного типа
			return null
		}
		// ВОЗВРАЩАЕТ ошибку если, свойство не предусмотренного кодом типа
		return new TypeError(`${componentName}: ${propsName} must be a number!`)
	}}

	state = {
		planet: {},
		loading: true,
		error: false
	}

	componentDidMount() {

		const updateInterval = this.props.updateInterval;

		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, updateInterval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
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

	updatePlanet = () => {
		const id = Math.floor(Math.random()*25) + 1;
		
		this.props.swapiService
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
						alt={`planet ${name}`} />

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

const mapMethodsToProps = (swapiService) => {
	return	{swapiService: swapiService}
}

export default withContext(mapMethodsToProps)(RandomPlanet);