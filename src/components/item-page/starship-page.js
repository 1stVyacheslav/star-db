import React, { Component } from 'react';
import ErrorMessage from '../error-message';
import Row from '../row';
import {
	StarshipList,
	StarshipDetails
} from '../sw-components';

import './item-page.css';

export default class StarshipPage extends Component {

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
					left = {<StarshipList onSelectItem={this.selectItem} />	} 
					right = {<StarshipDetails	itemId={this.state.selectedItemId} />}
				/>
		)
	}
}
