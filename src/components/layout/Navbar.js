import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-center'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse justify-content-center'
						id='navbarNav'
					>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link className='nav-link' aria-current='page' to='/'>
									Strona główna
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/services'>
									Usługi
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/contact'>
									Kontakt
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/pricing'>
									Cennik
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/opinions'>
									Opinie
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
