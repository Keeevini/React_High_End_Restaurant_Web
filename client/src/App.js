import React from 'react';

// import { } from './container';
import { Navbar } from './components';
import { AboutUs, Header, SpecialMenu } from './containers';
import './App.css';

const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<AboutUs />
			<SpecialMenu />
		</div>
	)
}

export default App