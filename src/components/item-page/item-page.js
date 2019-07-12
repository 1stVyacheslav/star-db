import React, { Component } from 'react';
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
		selectedItemId: null,
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

		return (
				<Row 
					left = {<PersonList onSelectItem={this.selectItem} />	} 
					right = {<PersonDetails	itemId={this.state.selectedItemId} />}
				/>
		)
	}
}
