import React from 'react';

// import { } from './container';
import { Navbar } from './components';
import { AboutUs, Header } from './containers';
import './App.css';

const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<AboutUs />
		</div>
	)
}

export default App