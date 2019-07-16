import React from 'react';
import ItemList from '../item-list/';
import { withData, withChildFunc, withContext, compose } from '../hoc/';


const mapPersonListMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPeople
	}
}

const mapPlanetListMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	}
}

const mapStarshipListMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	}
}

const renderPersonList		= ( {name} ) => <span> {name} </span>,
			renderPlanetList		= ( {name, diameter} ) => 
															<span> {name} ({diameter}) </span>,
			renderStarShipList	= ( {name, model} ) => <span> {name} ({model}) </span>;

const PersonList = compose(
				withContext(mapPersonListMethodsToProps),
				withData,
				withChildFunc(renderPersonList)
			)(ItemList)

const PlanetList = compose(
	withContext(mapPlanetListMethodsToProps),
	withData,
	withChildFunc(renderPlanetList)
)(ItemList)

const StarshipList = compose(
	withContext(mapStarshipListMethodsToProps),
	withData,
	withChildFunc(renderStarShipList)
)(ItemList)

export {
	PersonList,
	PlanetList,
	StarshipList
}