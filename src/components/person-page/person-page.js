import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


import './person-page.css';

export default class PersonPage extends Component {

	state = {
		selectedItemId: null
	}

	selectItem = (id) => {
		// console.log(id);
		this.setState({selectedItemId: id})
	}

	render() {
		return (
			<div className='row'>
				<div className='col-md-5 mb-md-0 mb-3'>
					<ItemList onSelectItem={this.selectItem}/>
				</div>
					
				<div className='col-md-7 mt-md-0 mt-3'>
					<PersonDetails personId={this.state.selectedItemId} />	
				</div>			
														
			</div>
		)
	}
}