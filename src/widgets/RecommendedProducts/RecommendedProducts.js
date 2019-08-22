import React, { Component } from 'react';
import Slider from 'react-slick';
import MediaQuery from 'react-responsive';

import Pagination from '../../components/Pagination/Pagination';

import './RecommendedProducts.scss';

export default class RecommendedProducts extends Component {
	render() {
		const { children } = this.props;

		const settings = {
			arrows: false,
			autoplay: true,
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<section className="recommended-products container">
				<h3 className="recommended-products__title">Quem viu viu também</h3>
				<MediaQuery query="(max-width: 1023px)">
					<ul className="recommended-products__list">
						<Slider {...settings}>{children}</Slider>
					</ul>
				</MediaQuery>
				<MediaQuery query="(min-width: 1024px)">
					<ul className="recommended-products__list">{children}</ul>
					<Pagination />
				</MediaQuery>
			</section>
		);
	}
}
