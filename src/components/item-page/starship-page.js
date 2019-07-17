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
		hasError: false
	}

	componentDidCatch() {
		this.setState({hasError: true})
	}

	selectItem = (id) => {
		const { history } = this.props;

		history.push(id);
	}

	render() {

		const { id } = this.props.match.params;


		if (this.state.hasError) {
			return <ErrorMessage />
		}

		return (
				<Row 
					left = {<StarshipList onSelectItem={this.selectItem} />	} 
					right = {<StarshipDetails	itemId={ id } />}
				/>
		)
	}
}
