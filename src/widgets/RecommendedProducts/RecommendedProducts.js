import React, { Component } from 'react';

import './RecommendedProducts.scss';

export default class RecommendedProducts extends Component {
	render() {
		const { api } = this.props;

		console.log(api);

		return (
			<section className="recommended-products">
				<h3 className="recommended-products__title">Quem viu viu também</h3>
			</section>
		);
	}
}
