import React, { Component } from 'react';

import ErrorMessage from '../error-message';
import { PersonList } from '../sw-components';

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

		const { history } = this.props;

		history.push(id)		
		
	}

	render() {

		if (this.state.hasError) {
			return <ErrorMessage />
		}

		return (
				<PersonList onSelectItem={ this.selectItem } />	
		)
	}
}