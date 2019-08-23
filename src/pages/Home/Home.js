import React, { Component } from 'react';

import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import IconButton from '../../components/IconButton/IconButton';

import ProductDetails from '../../widgets/ProductDetails/ProductDetails';
import ProductMedias from '../../widgets/ProductMedias/ProductMedias';
import RecommendedProducts from '../../widgets/RecommendedProducts/RecommendedProducts';

import monetaryMask from '../../helpers/monetaryMask';

import './Home.scss';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			api: null,
			apiStatus: null,
			productToShow: 1
		};
	}

	componentDidMount() {
		const { carPrice } = this.state;

		this.setState({ amount: carPrice });

		fetch('http://www.mocky.io/v2/5d5b259e2f00002c0036fa0b')
			.then(response => response.json())
			.then(api => {
				this.setState({
					apiStatus: 'success',
					api
				});
			})
			.catch(() => {
				this.setState({
					apiStatus: 'error'
				});
			});
	}

	handleChangeProduct = product => {
		this.setState({
			productToShow: product
		});
	};

	render() {
		const { api, apiStatus, productToShow } = this.state;

		return (
			<div className="sapatos">
				{apiStatus === 'error' ? (
					<Error />
				) : apiStatus === 'success' ? (
					<>
						<section className="home--grid-container container">
							<ProductMedias
								imgArr={api[productToShow].img}
								principalImg={api[productToShow].img[0].imgUrl}
								title={api[productToShow].title}
							/>

							<ProductDetails
								api={api}
								colorActive={0}
								colorArr={api[productToShow].color}
								colorSelected={api[productToShow].color[0].colorName}
								description={api[productToShow].description}
								installments={
									api[productToShow].price.installmentType[
										api[productToShow].price.installmentType.length -
											1
									].installments
								}
								installmentsValue={
									api[productToShow].price.installmentType[
										api[productToShow].price.installmentType.length -
											1
									].installmentsValue
								}
								model={api[productToShow].model}
								originalPrice={api[productToShow].price.original}
								promotionalPrice={api[productToShow].price.promotional}
								reference={api[productToShow].ref}
								sizeActive={0}
								sizeArr={api[productToShow].size}
								sizeSelected={api[productToShow].size[0]}
								title={api[productToShow].title}
							/>
						</section>
						<RecommendedProducts api={api}>
							{api.map((item, index) => (
								<li
									className="recommended-products__list__item"
									key={index}
								>
									<div className="recommended-products__list__item__img--wrapper">
										<img
											className="recommended-products__list__item__img"
											onClick={() => this.handleChangeProduct(index)}
											src={item.img[0].thumbnail}
											alt={item.title}
										/>
										<IconButton
											className="recommended-products__list__item__icon-button"
											color="primary"
											icon="plus"
											onClick={() =>
												alert('Adiciona produto direto à sacola')
											}
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
							))}
						</RecommendedProducts>
					</>
				) : (
					<Loading />
				)}
			</div>
		);
	}
}
