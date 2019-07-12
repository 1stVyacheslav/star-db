import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/';
import withData from '../hoc/';

const swapiService = new SwapiService();

const {
	getAllPeople,
	getAllPlanets,
	getAllStarships } = swapiService;

const withChildFunc = (Wrapper, fn) => {
	return (props) => { 
		return 	<Wrapper {...props} >		
							{fn} 
						</Wrapper>
			}
};

const renderPerson		= ( {name} ) => <span> {name} </span>,
			renderPlanet		= ( {name, diameter} ) => <span> {name} ({diameter}) </span>,
			renderStarShip	= ( {name, model} ) => <span> {name} ({model}) </span>;

const PersonList = 
	withData(
		withChildFunc(
			ItemList, renderPerson
		), getAllPeople
	);

const PlanetList = 
	withData(
		withChildFunc(
			ItemList, renderPlanet 
		), getAllPlanets
	);

const StarshipList = 
	withData(
		withChildFunc(
			ItemList, renderStarShip
		), getAllStarships
	);

export {
	PersonList,
	PlanetList,
	StarshipList
}