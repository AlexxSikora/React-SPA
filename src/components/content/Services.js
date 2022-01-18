import React from 'react';

export const Services = () => {
	return (
		<>
			<h2>lista usług</h2>

			<div className='services'>
				<section className='services-section'>
					<div className='logo first'></div>
					<div className='services-text'>utrzymanie</div>
				</section>
				<section className='services-section'>
					<div className='logo second'></div>
					<div className='services-text'>bezpieczeństwo IT</div>
				</section>
				<section className='services-section'>
					<div className='logo third'></div>
					<div className='services-text'>doradztwo</div>
				</section>
			</div>

			{/* <ul className="services-list">
                <li>Usługa nr 1</li>
                <li>Usługa nr 2</li>
                <li>Usługa nr 3</li>
                <li>Usługa nr 4</li>
                <li>Usługa nr 5</li>
            </ul> */}
		</>
	);
};
