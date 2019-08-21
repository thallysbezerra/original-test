import React, { Component } from 'react';

import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

import ProductDetails from '../../widgets/ProductDetails/ProductDetails';
import ProductMedias from '../../widgets/ProductMedias/ProductMedias';
import RecommendedProducts from '../../widgets/RecommendedProducts/RecommendedProducts';

import './Home.scss';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			api: null,
			apiStatus: null
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

	apiResponse(param) {
		const { api } = this.state;

		switch (param) {
			case 'error':
				return <Error />;
			case 'success':
				return (
					<>
						<section className="home--grid-container container">
							<ProductMedias
								imgArr={api[1].img}
								principalImg={api[1].img[0].imgUrl}
								title={api[1].title}
							/>

							<ProductDetails
								api={api}
								colorArr={api[1].color}
								colorName={api[1].color[0].colorName}
								description={api[1].description}
								installments={
									api[1].price.installmentType[
										api[1].price.installmentType.length - 1
									].installments
								}
								installmentsValue={
									api[1].price.installmentType[
										api[1].price.installmentType.length - 1
									].installmentsValue
								}
								model={api[1].model}
								originalPrice={api[1].price.original}
								promotionalPrice={api[1].price.promotional}
								reference={api[1].ref}
								sizeArr={api[1].size}
								sizeSelected={api[1].size[0]}
								title={api[1].title}
							/>
						</section>
						<RecommendedProducts api={api} />
					</>
				);
			default:
				return <Loading />;
		}
	}

	render() {
		const { apiStatus } = this.state;

		return <div className="sapatos">{this.apiResponse(apiStatus)}</div>;
	}
}
