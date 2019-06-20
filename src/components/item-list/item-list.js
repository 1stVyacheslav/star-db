import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {


	render() {
		return (
			<div className='item-list col-md-5'>
				<ul className='list-group '>
					<li className='list-group-item'>Luke Skywalker</li>
					<li className='list-group-item'>Darth Vader</li>
					<li className='list-group-item'>R2-D2</li>
				</ul>
			</div>
		)
	}
};