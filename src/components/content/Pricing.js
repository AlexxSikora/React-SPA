import React from 'react';

export const Pricing = () => {
	return (
		<div>
			<h2>cennik</h2>
			<table className='prices-table'>
				<thead>
					<tr>
						<th className='table-services'>Usługa</th>
						<th className='table-pricing'>Cena</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Usługa nr 1</td>
						<td>200zł</td>
					</tr>
					<tr>
						<td>Usługa nr 2</td>
						<td>300zł</td>
					</tr>
					<tr>
						<td>Usługa nr 3</td>
						<td>400zł</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
