import React from 'react';

import './error-message.css';
import icon from './death-star.png';

const ErrorMessage = () => {
	return (
		<div className='error-message'>
			<img src={icon} alt='error icon' />
			<span className='boom'>BOOM!</span>
			<span className='error-text'>Something has gone terribly wrong</span>
			<span className='error-text'>(but we already sent droids to fix it)</span>
		</div>
	)
}

export default ErrorMessage;