import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/';
import withData from '../hoc/';

const swapiService = new SwapiService();

const {
	getAllPeople,
	getAllPlanets,
	getAllStarships } = swapiService;

const List = ( {onSelectItem, renderItems} ) => {
	return (
		<ItemList 
			onSelectItem={onSelectItem}
			renderItems={renderItems}>
				{ ( {name} ) => <span> {name} </span> }
		</ItemList>
	)
};

const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export {
	PersonList,
	PlanetList,
	StarshipList
}