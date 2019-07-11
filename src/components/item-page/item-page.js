import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details';
import ErrorMessage from '../error-message';
import SwapiService from '../../services/swapi-service';
import Row from '../row';


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

		const itemList = <ItemList 
												onSelectItem={this.selectItem}
												getData={this.swapiService.getAllPeople}
												renderItem={ ( {name, birthYear} ) => <span>{name} ({birthYear})</span> } />;

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
