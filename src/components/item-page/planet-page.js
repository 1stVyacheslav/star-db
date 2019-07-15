import React, { Component } from 'react';
import ErrorMessage from '../error-message';
import Row from '../row';
import {
	PlanetList,
	PlanetDetails
} from '../sw-components';

import './item-page.css';

export default class PlanetPage extends Component {

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
					left = {<PlanetList onSelectItem={this.selectItem} />	} 
					right = {<PlanetDetails	itemId={this.state.selectedItemId} />}
				/>
		)
	}
}
