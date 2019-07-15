import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {updateItemData, withChildren, withContext} from '../hoc';

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

const mapPersonMethodGetData = (swapiService) => {
	return { getData: swapiService.getPerson }
}

const mapPlanetMethodGetData = (swapiService) => {
	return { getData: swapiService.getPlanet }
}

const mapStarshipMethodGetData = (swapiService) => {
	return { getData: swapiService.getStarship }
}

const PersonDetails = withContext(
	updateItemData(
		withChildren(
			ItemDetails, childrenArrPersons
		)
	), mapPersonMethodGetData)

const PlanetDetails = withContext(
	updateItemData(
		withChildren(
			ItemDetails, childrenArrPlanets
		)
	), mapPlanetMethodGetData)

const StarshipDetails = withContext(
	updateItemData(
		withChildren(
			ItemDetails, childrenArrStarships
		)
	), mapStarshipMethodGetData)

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}