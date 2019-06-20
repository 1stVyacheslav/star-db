import React from 'react';

import './person-details.css';

const PersonDetails = () => {
	return (
		<div className='col-md-7'>
			<div className='person-details jumbotron d-flex '>
				<img className='person-image img-fluid' src='https://starwars-visualguide.com/assets/img/characters/3.jpg' alt='person'/>

				<div>
					<h4>R2-D2</h4>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'>
							<span className='mr-3'>Gender</span>
							<span>male</span>
						</li>
						<li className='list-group-item'>
							<span className='mr-3'>Birth Year</span>
							<span>43</span>
						</li>
						<li className='list-group-item'>
							<span className='mr-3'>Eye Color</span>
							<span>red</span>
						</li>
					</ul>
				</div>

			</div>
		</div>

	)
};

export default PersonDetails;