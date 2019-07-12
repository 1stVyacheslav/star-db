import React, {Component} from 'react';
import Spinner from '../spinner';

const withData = (Element, getData) => {

	return class extends Component {

		state = {
			itemList: null
		}
	
		componentDidMount() {
		
			getData()
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

export default withData;