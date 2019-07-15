import React from 'react';
import ItemList from '../item-list/';
import {withData, withChildFunc, addContext} from '../hoc/';


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

const PersonList = addContext(
		withData(
			withChildFunc(
				ItemList, renderPersonList
			)
		), mapPersonListMethodsToProps);

const PlanetList = addContext(
			withData(
				withChildFunc(
					ItemList, renderPlanetList
				)
			), mapPlanetListMethodsToProps);

const StarshipList = addContext(
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