import React from 'react';
// import withData from '../hoc';

import './item-list.css';
// import SwapiService from '../../services/swapi-service';

const ItemList = ( props ) => {	

	const {itemList, onSelectItem, children: renderItem} = props;

	const renderItems = (arr) => {

			return arr.map( ( item ) => {
				const { id } = item,
							label = renderItem(item);
				
				return <li className='list-group-item' key={id} onClick={() => onSelectItem(id)}>{label}</li>
			})
		}

	return (
		
		<ul className='list-group item-list'>
			{ renderItems(itemList) }					
		</ul>

	)
}

export default ItemList;