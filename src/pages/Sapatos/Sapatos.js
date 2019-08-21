import React, { Component } from 'react';

import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

import RecommendedProducts from '../../widgets/RecommendedProducts/RecommendedProducts';

export default class Sapatos extends Component {
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
				return <RecommendedProducts api={api} />;
			default:
				return <Loading />;
		}
	}

	render() {
		const { apiStatus } = this.state;

		return (
			<section className="sapatos">{this.apiResponse(apiStatus)}</section>
		);
	}
}
