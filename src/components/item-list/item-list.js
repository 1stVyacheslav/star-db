import React from 'react';
import withData from '../hoc';

import './item-list.css';
import SwapiService from '../../services/swapi-service';

const ItemList = ( {renderItems, itemList} ) => {	

	return (

		<ul className='list-group item-list'>
			{ renderItems(itemList) }					
		</ul>

	)
}

export default ItemList;