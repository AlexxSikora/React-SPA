import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Opinions = () => {
	useEffect(() => {
		getPersons();
	}, []);
	const [persons, setPersons] = useState([]);
	const [loading, setLoading] = useState(false);

	const getPersons = async () => {
		try {
			const res = await axios.get('https://randomuser.me/api/?results=5');
			setPersons(res.data);
			setLoading(true);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<h2>Zaufali nam</h2>
			<div className='opinions'>
				{loading &&
					persons.results.map((persons, i) => {
						return (
							<div className='opinion' key={i}>
								<div className='opinion-photo'>
									<img src={persons.picture.large} alt='' />
								</div>
								<div className='opinion-info'>
									<p>
										{persons.name.first} {persons.name.last}
									</p>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};
