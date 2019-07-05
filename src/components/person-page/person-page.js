import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorMessage from '../error-message';
import SwapiService from '../../services/swapi-service';

import './person-page.css';


export default class PersonPage extends Component {

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

		return (
			<div className='row'>
				<div className='col-md-5 mb-md-0 mb-3'>
					<ItemList 
					onSelectItem={this.selectItem}
					getData={this.swapiService.getAllPeople} />
				</div>
					
				<div className='col-md-7 mt-md-0 mt-3'>
					<PersonDetails personId={this.state.selectedItemId} />
					<ErrorButton />
				</div>		
														
			</div>
		)
	}
}

class ErrorButton extends Component {

	state = {
		error: false
	}

	render() {

		if (this.state.error) {
			this.foo.bar = 0;
		}
		return (
		<div className='btn btn-danger' onClick={() => this.setState({error: true})}>Throw Error</div>
	)}
}