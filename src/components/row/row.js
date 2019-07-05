import React from 'react';

import './row.css';

const Row = ( {left, right} ) => {
	return (
		<div className='row mb-3'>
			<div className='col-md-6 mb-md-0 mb-3'>
				{left}
			</div>				
			<div className='col-md-6 mt-md-0 mt-3'>
				{right}				
			</div>														
		</div>
	)
}

export default Row;