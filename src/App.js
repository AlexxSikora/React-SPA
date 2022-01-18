import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/content/Home';
import Contact from './components/content/Contact';
import About from './components/content/About';
import { Header } from './components/layout/Header';
import { Pricing } from './components/content/Pricing';
import { Services } from './components/content/Services';
import { Opinions } from './components/content/Opinions';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Navbar />
				<main className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/pricing' element={<Pricing />} />
						<Route path='/services' element={<Services />} />
						<Route path='/opinions' element={<Opinions />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;
