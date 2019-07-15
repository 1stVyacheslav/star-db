import React, {Component} from 'react';
import Spinner from '../spinner';

const withData = (Element) => {

	return class extends Component {

		state = {
			itemList: null
		}
	
		componentDidMount() {
		
			this.props.getData()
							.then( (itemList) => this.setState( {itemList} ) )
							.catch( (err) => console.log(err))
		}

		render() {

			const {itemList} = this.state;

			if (!itemList) {
				return <Spinner />
			}

			return <Element {...this.props} itemList={itemList} />;
		}
	}
}

const updateItemData = (Item, getData) => {
	return class extends Component {

		state = {
			data: null,
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
	
			if (!this.props.itemId) {
				return;
			}
	
			const { itemId } = this.props;
	
			this.setState( {loading: true })
			
			getData( itemId )
								.then( (item) => {								
									this.setState({ 
										data: item,
										loading: false
									 }) 
								})							
		}

		render() {

			const Message = () => {
				return <span className='message-text'>Please, select item!</span>
			}

			const { data, loading } = this.state;

			const message = (!data && !loading) ? <Message /> : null;
			const spinner = loading ? <Spinner /> : null;
			const details = (!loading && !!data) ? 
												<Item {...this.props} item={data} loading={loading}/> : null;
			
			return (
				<div className='item-details card d-flex flex-row'>
					{message}
					{spinner}
					{details}
				</div>					
				)
		}
	}
}

const withChildFunc = (Wrapper, fn) => {
	return (props) => { 
		return 	<Wrapper {...props} >		
							{fn} 
						</Wrapper>
			}
};


const withChildren = (Wrapper, ...Children) => {
	return (props) => {
		return 	<Wrapper {...props}>
							{Children}
						</Wrapper>
	}
}


export {withData, updateItemData, withChildFunc, withChildren};