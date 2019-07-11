import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details';
import ErrorMessage from '../error-message';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import {
	PersonList,
	PlanetList,
	StarshipList,
	PersonDetails,
	PlanetDetails,
	StarshipDetails
} from '../sw-components/';


import './item-page.css';


export default class ItemPage extends Component {

	swapiService = new SwapiService()

	state = {
		selectedItemId: 3,
		hasError: false
	}

	componentDidCatch() {
		this.setState({hasError: true})
	}

	selectItem = (id) => {
		this.setState({selectedItemId: id})
	}

	render() {

		if (this.state.hasError) {
			return <ErrorMessage />
		}

		const itemList = 	<PersonList onSelectItem={this.selectItem}>
												{ ( {name} ) => <span> {name} </span> }
											</PersonList>;

		const itemDetails = <ItemDetails 
														itemId={this.state.selectedItemId}
														getData={this.swapiService.getPerson}>

													<Record field={'gender'} label={'Gender'}/>
													<Record field={'birthYear'} label={'Birth Year'}/>
													<Record field={'eyeColor'} label={'Eye Color'}/>

												</ItemDetails>

		return <Row 
							left={itemList} 
							right={itemDetails}
						/>
	}
}
