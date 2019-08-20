import React from 'react';

import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';

import './Footer.scss';

const Footer = () => (
	<footer className="footer">
		<div className="footer--container container">
			<div className="footer__news">
				<div className="footer__news--container">
					<div className="footer__news__title">Assine nossa News</div>
					<TextField placeholder="Nome" />
					<TextField placeholder="E-mail" type="email" />
					<Button
						className="footer__news__button"
						name="Enviar"
						onClick={() => alert('Enviar informações')}
					/>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
