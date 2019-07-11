import React, {Component} from 'react';
import Spinner from '../spinner';

function withData(Element) {

	return class extends Component {

		state = {
			itemList: null
		}
	
		componentDidMount() {
	
			const { getData } = this.props;
	
			getData()
							.then( (itemList) => this.setState( {itemList} ) )
							.catch( (err) => console.log(err))
		}
	
		renderItems = (arr) => {
			return arr.map( ( item ) => {
				const { id } = item,
							label = this.props.renderItem(item);
				
				const {onSelectItem} = this.props;
				return <li className='list-group-item' key={id} onClick={() => onSelectItem(id)}>{label}</li>
				
			} );		
		}

		render() {

			const {itemList} = this.state;

			if (!itemList) {
				return <Spinner />
			}

			return <Element itemList={itemList} renderItems={this.renderItems}/>;
		}
	}
}

export default withData;