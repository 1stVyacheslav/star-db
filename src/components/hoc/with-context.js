import React from 'react';
import { SwapiConsumer } from '../../services/';

const withContext = (mapMethodsToProps) => {
	return  (Wrapped) => {
		return (props) => {
			return ( 
			<SwapiConsumer>
				{
					(swapiService) => {
						const methods = mapMethodsToProps(swapiService);
						return <Wrapped {...props} {...methods} />
					}
				}
			</SwapiConsumer>
			)
		}
	}

}

export { withContext };