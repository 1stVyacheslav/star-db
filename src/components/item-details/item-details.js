import React, { Component } from 'react';
import Spinner from '../spinner';

import './item-details.css';

export default class ItemDetails extends Component {
	
	state = {
		item: null,
		itemImage: null,
		loading: false
	}

	componentDidMount() {
		this.updatePerson();
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

		const { personId, getImageData, getData} = this.props;

		this.setState( {loading: true })
		
		getData( personId )
							.then( (item) => {
								// console.log(person);
								this.setState({ 
									item: item,
									loading: false
								 }) 
							})

		this.setState({itemImage: getImageData(personId)}) 
						

	}
	
	render() {
		
		const { item, itemImage, loading } = this.state,
					message = (!item && !loading) ? <Message /> : null,
					spinner = loading ? <Spinner /> : null,
					content = (!loading && !!item) ? 
											<Details 
												item={ item } itemImage={itemImage}
												content={React.Children
													.map(this.props.children, (child) => {
														
														return child;
												}) }
											/> : null;

		return (
			
				<div className='item-details card d-flex flex-row'>
					{message}
					{spinner}
					{content}	
				</div>		
	
		)
	};
};

const Details = ( {item, itemImage, content} ) => {

	const { name, gender, birthYear, eyeColor } = item;
	

	return (
		<React.Fragment>
			<img className='item-image' src={itemImage} alt='item'/>
	
			<div className='card-body'>
				<h4 className='card-title'>{name}</h4>
				<ul className='list-group list-group-flush'>
					{content}
				</ul>
			</div>
		</React.Fragment>
	)
};

const Record = ( {label, content } ) => {
	return (
		<li className='list-group-item'>
			<span className='mr-3'>{label}</span>
			<span>{content}</span>
		</li>
	)
}

export {Record};

const Message = () => {
	return <span className='message-text'>Please, select item!</span>
}