import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorMessage from '../error-message';
import SwapiService from '../../services/swapi-service';
import Row from '../row'

import './person-page.css';


export default class PersonPage extends Component {

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

		const itemList = <ItemList 
												onSelectItem={this.selectItem}
												getData={this.swapiService.getAllPeople}
												renderItem={ ( {name, birthYear} ) => <span>{name} ({birthYear})</span> }
											/>;

		const itemDetails = <ItemDetails 
														personId={this.state.selectedItemId}
														getData={this.swapiService.getPerson} />

		return <Row 
							left={itemList} 
							right={itemDetails}
						/>
	}
}
