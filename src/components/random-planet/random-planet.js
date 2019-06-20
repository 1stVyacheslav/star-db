import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {
	render() {
		return (
		<div className='random-planet jumbotron d-flex'>
			<img className='planet-image img-fluid' src='https://starwars-visualguide.com/assets/img/planets/5.jpg' alt='planet' />

			{/* <div className='card'>
				<div className='card-body'>
					<h4 className='card-title'>Planet Name</h4>
				</div>
			</div> */}

			<div>
				<h4>Planet Name</h4>

				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className="mr-3">Population</span>
						<span>123124</span>
					</li>
					<li className='list-group-item'>
						<span className="mr-3">Rotation Period</span>
						<span>43</span>
					</li>
					<li className='list-group-item'>
						<span className="mr-3">Diameter</span>
						<span>100</span>
					</li>
				</ul>
			</div>
			
		</div>
		)
	}
};