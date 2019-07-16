import React from 'react';
import PropTypes from 'prop-types'
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

ItemList.propTypes = {
	itemList: PropTypes.arrayOf(PropTypes.object).isRequired //обязательное свойство
}

export default ItemList;