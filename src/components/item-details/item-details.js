import React, { Component } from 'react';
import Spinner from '../spinner';

import './item-details.css';

export default class ItemDetails extends Component {
	
	state = {
		item: null,
		loading: false
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.updatePerson();
		}
	}

	updatePerson = () => {

		if (!this.props.personId) {
			return;
		}

		const { personId, getData} = this.props;

		this.setState( {loading: true })
		
		getData( personId )
							.then( (item) => {								
								this.setState({ 
									item: item,
									loading: false
								 }) 
							})							
	}
	
	render() {
		
		const { item, loading } = this.state;

		const message = (!item && !loading) ? <Message /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = (!loading && !!item) ? 
											<Details item={ item }>
												<Record item ={item} field={'gender'} label={'Gender'}/>
												<Record item ={item} field={'birthYear'} label={'Birth Year'}/>
												<Record item ={item} field={'eyeColor'} label={'Eye Color'}/>
											</Details> : null;

		return (
			
				<div className='item-details card d-flex flex-row'>
					{message}
					{spinner}
					{content}	
				</div>		
	
		)
	};
};

const Details = ( {item, itemImage, children} ) => {

	const { image, name } = item;
	
	return (
		<React.Fragment>
			<img className='item-image' src={image} alt='item'/>
	
			<div className='card-body'>
				<h4 className='card-title'>{name}</h4>
				<ul className='list-group list-group-flush'>
					{children}
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

const Message = () => {
	return <span className='message-text'>Please, select item!</span>
}

// export {Record};