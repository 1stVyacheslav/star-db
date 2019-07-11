import React from 'react';
import withData from '../hoc';

import './item-list.css';

const ItemList = ( {renderItems, itemList} ) => {	

	return (

		<ul className='list-group item-list'>
			{ renderItems(itemList) }					
		</ul>

	)
}


export default withData(ItemList);