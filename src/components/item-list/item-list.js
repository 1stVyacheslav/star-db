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
		return arr.map( ({ id, name }) => {
			
			const {onSelectItem} = this.props;
			return <li className='list-group-item' key={id} onClick={() => onSelectItem(id)}>{name}</li>
			
		} );

		
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
