import React from 'react';

export const Services = () => {
	return (
		<>
			<h2>lista usług</h2>

			<div className='services'>
				<section className='services-section'>
					<div className='logo maintenance'></div>
					<div className='services-text'>utrzymanie</div>
				</section>
				<section className='services-section'>
					<div className='logo security'></div>
					<div className='services-text'>bezpieczeństwo IT</div>
				</section>
				<section className='services-section'>
					<div className='logo consultancy'></div>
					<div className='services-text'>doradztwo</div>
				</section>
			</div>
		</>
	);
};
