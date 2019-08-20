import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';

import './Footer.scss';

import ebit from './img/ebit.svg';
import logo from './img/logo-original-white.svg';
import vtex from './img/vtex.svg';

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

			<div className="footer__content">
				<div className="footer__content__medias">
					<ul className="footer__content__medias__social-media">
						<li className="footer__content__medias__social-media__item">
							<Link
								className="footer__content__medias__social-media__item__link fas fa-facebook"
								target="_blank"
								to="https://www.facebook.com/"
							/>
						</li>
						<li className="footer__content__medias__social-media__item">
							<Link
								className="footer__content__medias__social-media__item__link fas fa-instagram"
								target="_blank"
								to="http://instagram.com/"
							/>
						</li>
						<li className="footer__content__medias__social-media__item">
							<Link
								className="footer__content__medias__social-media__item__link fas fa-pinterest"
								target="_blank"
								to="http://pinterest.com/"
							/>
						</li>
					</ul>

					<ul className="footer__content__medias__partners">
						<li className="footer__content__medias__partners__item">
							<img
								className="footer__content__medias__partners__item__img"
								src={vtex}
								alt="VTEX Certified"
							/>
						</li>
						<li className="footer__content__medias__partners__item">
							<img
								className="footer__content__medias__partners__item__img"
								src={ebit}
								alt="Ebit"
							/>
						</li>
					</ul>
				</div>

				<div className="footer__content__links">
					<ul className="footer__content__links__list">
						<li className="footer__content__links__list__title">
							Institucional
						</li>
						<li className="footer__content__links__list__item">
							<Link
								className="footer__content__links__list__item__link"
								to="a-marca"
							>
								A Marca
							</Link>
						</li>
						<li className="footer__content__links__list__item">
							<Link
								className="footer__content__links__list__item__link"
								to="lojas"
							>
								Lojas
							</Link>
						</li>
						<li className="footer__content__links__list__item">
							<Link
								className="footer__content__links__list__item__link"
								to="contato"
							>
								Contato
							</Link>
						</li>
					</ul>

					<ul className="footer__content__links__list">
						<li className="footer__content__links__list__title">
							Informações
						</li>
						<li className="footer__content__links__list__item">
							<Link
								className="footer__content__links__list__item__link"
								to="formas-de-pagamento"
							>
								Formas de pagamento
							</Link>
						</li>
						<li className="footer__content__links__list__item">
							<Link
								className="footer__content__links__list__item__link"
								to="trocas-e-devolucoes"
							>
								Trocas e devoluções
							</Link>
						</li>
						<li className="footer__content__links__list__item">
							<Link
								className="footer__content__links__list__item__link"
								to="cuidados-com-o-produto"
							>
								Cuidados Com o Produto
							</Link>
						</li>
					</ul>

					<ul className="footer__content__links__list">
						<li className="footer__content__links__list__title">
							Conheça
						</li>
						<li className="footer__content__links__list__item">
							<Link
								className="footer__content__links__list__item__link"
								to="franquias-e-multimarcas"
							>
								Franquias e Multimarcas
							</Link>
						</li>
						<li className="footer__content__links__list__item">
							<Link
								className="footer__content__links__list__item__link"
								to="trabalhe-com-a-gente"
							>
								Trabalhe com a Gente
							</Link>
						</li>
						<li className="footer__content__links__list__item">
							<Link
								className="footer__content__links__list__item__link"
								to="procon-rj"
							>
								Procon-RJ
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="footer__info">
			<div className="footer__info--container container">
				<div className="footer__info__text">
					<p className="footer__info__text__p">
						Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.{' '}
					</p>
					<p className="footer__info__text__p">
						Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca -
						Rio de Janeiro - RJ - CEP: 22640-100
					</p>
					<p className="footer__info__text__p">
						CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail:
						ecommerce@viamia.com.br
					</p>
				</div>
				<img
					className="footer__info__logo"
					src={logo}
					alt="Original IO Logo"
				/>
			</div>
		</div>
	</footer>
);

export default Footer;
