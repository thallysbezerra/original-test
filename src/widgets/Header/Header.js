import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Cart from '../../components/Cart/Cart';
import TextField from '../../components/TextField/TextField';

import logo from './img/logo-original-io.svg';

import './Header.scss';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
	}

	handleShowMenu = () => {
		const { showMenu } = this.state;

		this.setState({
			showMenu: !showMenu
		});

		if (showMenu === true) {
			document.body.style.overflow = 'visible';
		} else {
			document.body.style.overflow = 'hidden';
		}
	};

	render() {
		const { showMenu } = this.state;

		return (
			<header className="header container">
				<div className="header__logo-area">
					<Link className="header__logo-area__item__link" to="/">
						<img
							className="header__logo-area__logo"
							src={logo}
							alt="Original IO logo"
						/>
					</Link>
					<BurgerMenu
						onClick={() => this.handleShowMenu()}
						status={showMenu}
					/>
				</div>

				<nav
					className={`header__nav container ${showMenu ? 'active' : ''}`}
				>
					<ul className="header__nav__login-area">
						<li className="header__nav__login-area__item">
							<Link
								className="header__nav__login-area__item__link"
								to="/login"
							>
								Entrar
							</Link>
						</li>
						<li className="header__nav__login-area__item">
							<Link
								className="header__nav__login-area__item__link"
								to="/signup"
							>
								Cadastre-se
							</Link>
						</li>
					</ul>

					<ul className="header__nav__menu-area">
						<li className="header__nav__menu-area__item">
							<Link
								className="header__nav__menu-area__item__link"
								to="/sapatos"
							>
								Sapatos
							</Link>
						</li>
						<li className="header__nav__menu-area__item">
							<Link
								className="header__nav__menu-area__item__link"
								to="/bolsas"
							>
								Bolsas
							</Link>
						</li>
						<li className="header__nav__menu-area__item">
							<Link
								className="header__nav__menu-area__item__link"
								to="/acessorios"
							>
								Acessórios
							</Link>
						</li>
						<li className="header__nav__menu-area__item">
							<Link
								className="header__nav__menu-area__item__link"
								to="/off"
							>
								Off
							</Link>
						</li>
					</ul>

					<ul className="header__nav__product-area">
						<li className="header__nav__product-area__item">
							<TextField
								className="header__nav__product-area__item__search-input"
								icon="search"
								onClickIcon={() => alert('Fazer busca')}
								placeholder="Busca"
							/>
						</li>
						<li className="header__nav__product-area__item">
							<Cart itemsQuantity={0} />
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
