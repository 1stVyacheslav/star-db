import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/';
import {withData, withChildFunc} from '../hoc/';

const swapiService = new SwapiService();

const {
	getAllPeople,
	getAllPlanets,
	getAllStarships } = swapiService;

const renderPersonList		= ( {name} ) => <span> {name} </span>,
			renderPlanetList		= ( {name, diameter} ) => 
														<span> {name} ({diameter}) </span>,
			renderStarShipList	= ( {name, model} ) => <span> {name} ({model}) </span>;

const PersonList = 
	withData(
		withChildFunc(
			ItemList, renderPersonList
		), getAllPeople
	);

const PlanetList = 
	withData(
		withChildFunc(
			ItemList, renderPlanetList 
		), getAllPlanets
	);

const StarshipList = 
	withData(
		withChildFunc(
			ItemList, renderStarShipList
		), getAllStarships
	);

export {
	PersonList,
	PlanetList,
	StarshipList
}