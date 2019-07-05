import React, { Component } from 'react';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {	

	state = {
		itemList: null
	}

	componentDidMount() {

		const { getData } = this.props;

		getData()
						.then( (itemList) => this.setState( {itemList} ) )
						.catch( (err) => console.log(err))
	}

	renderItems = (arr) => {
		return arr.map( ({ id, name }) => {
			
			const {onSelectItem} = this.props;
			return <li className='list-group-item' key={id} onClick={() => onSelectItem(id)}>{name}</li>
			
		} );		
	}


	render() {

		const {itemList} = this.state;

		if (!itemList) {
			return <Spinner />
		}

		return (
		
				<ul className='list-group item-list'>
					{ this.renderItems(itemList) }					
				</ul>
		
		)
	}
};
