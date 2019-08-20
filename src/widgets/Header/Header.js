import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from './img/logo-original-io.svg';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__logo-area">
					<Link to="/">
						<img
							className="header__logo-area__logo"
							src={logo}
							alt="Original IO logo"
						/>
					</Link>
				</div>
			</header>
		);
	}
}
