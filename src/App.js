import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import BreadCrumb from './widgets/Breadcrumb/Breadcrumb';
import Footer from './widgets/Footer/Footer';
import Header from './widgets/Header/Header';

import Routes from './pages/Routes';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<BreadCrumb />
				<Routes />
				<Footer />
			</BrowserRouter>
		);
	}
}
