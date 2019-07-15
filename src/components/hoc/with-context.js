import React from 'react';
import { SwapiConsumer } from '../../services/';

const addContext = (Wrapped) => {

	return (props) => {
		return ( 
		<SwapiConsumer>
			{
				(swapiService) => {
					return <Wrapped {...props} swapiService={swapiService} />
				}
			}
		</SwapiConsumer>
		)
	}
}

export { addContext };