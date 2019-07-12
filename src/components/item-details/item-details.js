import React from 'react';

import './item-details.css';

const ItemDetails = ( props ) => {	
		
		const { item } = props;
		const { children: renderItems } = props;
		
		const records = React.Children.map( renderItems, (child) => {
			return React.cloneElement( child, {item} );
		} )

		return <Details item={item} records={ records } />	
	
};

const Details = ( {item, records} ) => {

	const { image, name } = item;
	
	return (
		<React.Fragment>
			<img className='item-image' src={image} alt='item'/>
	
			<div className='card-body'>
				<h4 className='card-title'>{name}</h4>
				<ul className='list-group list-group-flush'>
					{records}
				</ul>
			</div>
		</React.Fragment>
	)
};

const Record = ( {item, field, label } ) => {
	return (
		<li className='list-group-item'>
			<span className='mr-3'>{label}</span>
			<span>{item[field]}</span>
		</li>
	)
}

export {Record};
export default ItemDetails;

