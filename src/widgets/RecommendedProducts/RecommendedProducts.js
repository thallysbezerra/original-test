import React, { Component } from 'react';
import Slider from 'react-slick';
import MediaQuery from 'react-responsive';
import monetaryMask from '../../helpers/monetaryMask';

import IconButton from '../../components/IconButton/IconButton';

import './RecommendedProducts.scss';
import Pagination from '../../components/Pagination/Pagination';

export default class RecommendedProducts extends Component {
	render() {
		const { api } = this.props;

		const settings = {
			autoplay: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		const list = (item, index) => (
			<li className="recommended-products__list__item" key={index}>
				<div className="recommended-products__list__item__img--wrapper">
					<img
						className="recommended-products__list__item__img"
						src={item.img[0].thumbnail}
						alt={item.title}
					/>
					<IconButton
						className="recommended-products__list__item__icon-button"
						color="primary"
						icon="plus"
						onClick={() => alert('Adiciona produto direto à sacola')}
					/>
				</div>
				<div className="recommended-products__list__item__info">
					<div className="recommended-products__list__item__info__price">
						{monetaryMask(item.price.promotional)}
					</div>
					<div className="recommended-products__list__item__info__colors">
						{item.color.map((subitem, index) => (
							<span
								className="recommended-products__list__item__info__colors__dot"
								key={index}
								style={{
									backgroundColor: subitem.hexColor
								}}
							/>
						))}
					</div>
				</div>
			</li>
		);

		return (
			<section className="recommended-products container">
				<h3 className="recommended-products__title">Quem viu viu também</h3>
				<MediaQuery query="(max-width: 1023px)">
					<ul className="recommended-products__list">
						<Slider {...settings}>
							{api.map((item, index) => list(item, index))}
						</Slider>
					</ul>
				</MediaQuery>
				<MediaQuery query="(min-width: 1024px)">
					<ul className="recommended-products__list">
						{api.map((item, index) => list(item, index))}
					</ul>
					<Pagination />
				</MediaQuery>
			</section>
		);
	}
}
