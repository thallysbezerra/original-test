import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './widgets/Footer/Footer';
import Header from './widgets/Header/Header';

import Routes from './pages/Routes';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
