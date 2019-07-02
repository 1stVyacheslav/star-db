import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {

	swapi = new SwapiService();
	
	state = {
		person: null,
		loading: false
	}

	componentWillUpdate(newProps) {
		if (newProps !== this.props) {
			this.setState( {loading: true })
		}
		
	}

	componentDidMount() {
		// this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			// console.log('update');
			this.updatePerson();
		}
	}

	updatePerson = () => {

		if (!this.props.personId) {
			return;
		}
		
		this.swapi.getPerson( this.props.personId )
							.then( (person) => {
								// console.log(person);
								this.setState({ 
									person: person,
									loading: false
								 }) 
							})

	}
	
	render() {
		
		const { person, loading } = this.state,
					message = (!person && !loading) ? <Message /> : null,
					spinner = loading ? <Spinner /> : null,
					content = (!loading && !!person) ? <Details person={ person } /> : null;

		return (
			
				<div className='person-details card d-flex flex-row'>
					{message}
					{spinner}
					{content}	
				</div>		
	
		)
	};
};

const Details = ( {person} ) => {

	const { id, name, gender, birthYear, eyeColor } = person;

	return (
		<React.Fragment>
			<img className='person-image' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='person'/>
	
			<div className='card-body'>
				<h4 className='card-title'>{name}</h4>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className='mr-3'>Gender</span>
						<span>{gender}</span>
					</li>
					<li className='list-group-item'>
						<span className='mr-3'>Birth Year</span>
						<span>{birthYear}</span>
					</li>
					<li className='list-group-item'>
						<span className='mr-3'>Eye Color</span>
						<span>{eyeColor}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
};

const Message = () => {
	return <span className='message-text'>Please, select person!</span>
}