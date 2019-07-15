import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemDetails, {Record} from '../item-details';
import {updateItemData, withChildren} from '../hoc';

const swapiService = new SwapiService();

const {
	getPerson,
	getPlanet,
	getStarship
} = swapiService;

const childrenArrPersons = [
	<Record field={'gender'} label={'Gender'}/>,
	<Record field={'birthYear'} label={'Birth Year'} />,
	<Record field={'eyeColor'} label={'Eye Color'}/>]

const childrenArrPlanets = [
	<Record field={'population'} label={'Population'}/>,
	<Record field={'rotationPeriod'} label={'Rotation Period'}/>,
	<Record field={'diameter'} label={'Diameter'}/>]

const childrenArrStarships = [
	<Record field={'model'} label={'Model'}/>,
	<Record field={'length'} label={'Length'}/>,
	<Record field={'cost'} label={'Cost'}/>]

const PersonDetails = updateItemData(
	withChildren(
		ItemDetails, childrenArrPersons
	), getPerson)

const PlanetDetails = updateItemData(
	withChildren(
		ItemDetails, childrenArrPlanets
	), getPlanet)

const StarshipDetails = updateItemData(
	withChildren(
		ItemDetails, childrenArrStarships
		), getStarship)

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}