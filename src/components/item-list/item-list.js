import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

	swapiService = new SwapiService()

	state = {
		ppersonList: null
	}

	componentDidMount() {
		this.swapiService
						.getAllPeople()
						.then( (personList) => this.setState( {personList} ) )
						.catch( (err) => console.log(err))
	}

	renderItems = (arr) => {
		const items = arr.map( (item) => {
			const { id, name } = item;
			return <li className='list-group-item' key={id}>{name}</li>
		} );

		return items;
	}


	render() {

		const {personList} = this.state;

		if (!personList) {
			return <Spinner />
		}



		return (
		
				<ul className='list-group item-list'>

					{ this.renderItems(personList) }
					
				</ul>
		
		)
	}
};
