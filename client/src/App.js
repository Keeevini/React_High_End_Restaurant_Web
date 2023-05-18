import React from 'react';

// import { } from './container';
import { Navbar } from './components';
import { AboutUs, Header, SpecialMenu, Chef } from './containers';
import './App.css';

const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<AboutUs />
			<SpecialMenu />
			<Chef />
		</div>
	)
}

export default App