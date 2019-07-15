import React, { Component } from 'react';
import ErrorMessage from '../error-message';
import Row from '../row';
import {
	PersonList,
	PersonDetails
} from '../sw-components';

import './item-page.css';

export default class PeoplePage extends Component {

	state = {
		selectedItemId: null,
		hasError: false
	}

	componentDidCatch() {
		this.setState({hasError: true})
	}

	selectItem = (id) => {
		this.setState({selectedItemId: id})
	}

	render() {

		if (this.state.hasError) {
			return <ErrorMessage />
		}

		return (
				<Row 
					left = {<PersonList onSelectItem={this.selectItem} />	} 
					right = {<PersonDetails	itemId={this.state.selectedItemId} />}
				/>
		)
	}
}
