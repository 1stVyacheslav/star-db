import React from 'react';
import ItemList from '../item-list/';
import {withData, withChildFunc, withContext} from '../hoc/';


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

const PersonList = withContext(
		withData(
			withChildFunc(
				ItemList, renderPersonList
			)
		), mapPersonListMethodsToProps);

const PlanetList = withContext(
			withData(
				withChildFunc(
					ItemList, renderPlanetList
				)
			), mapPlanetListMethodsToProps);

const StarshipList = withContext(
				withData(
					withChildFunc(
						ItemList, renderStarShipList
					)
				), mapStarshipListMethodsToProps);

export {
	PersonList,
	PlanetList,
	StarshipList
}