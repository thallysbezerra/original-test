import React, { Component } from 'react';
import Button from '../../components/Button/Button';

import monetaryMask from '../../helpers/monetaryMask';

import './ProductDetails.scss';

export default class ProductInfo extends Component {
	render() {
		const {
			api,
			colorArr,
			colorName,
			description,
			installments,
			installmentsValue,
			model,
			originalPrice,
			promotionalPrice,
			reference,
			sizeArr,
			sizeSelected,
			title
		} = this.props;

		console.log(api);

		return (
			<div className="product-details">
				<h2 className="product-details__title">{title}</h2>

				<small className="product-details__ref">{`${model} | ${reference}`}</small>

				<div className="product-details__price">
					<span className="product-details__price--original">
						{monetaryMask(originalPrice)}
					</span>
					<span className="product-details__price--promotional">
						{monetaryMask(promotionalPrice)}
					</span>
					<small className="product-details__price--split">
						{`Ou ${installments}x de ${monetaryMask(installmentsValue)}`}
					</small>
				</div>

				<div className="product-details__color">
					<span className="product-details__color__label">Cor:</span>
					<span className="product-details__color__name">
						({colorName})
					</span>
					<div className="product-details__color__dot--wrapper">
						{colorArr.map((item, index) => (
							<button
								className="product-details__color__dot"
								key={index}
								style={{
									backgroundColor: item.hexColor
								}}
							/>
						))}
					</div>
				</div>

				<div className="product-details__size">
					<span className="product-details__size__label">Tamanho:</span>
					<span className="product-details__size__name">
						({sizeSelected})
					</span>
					<button className="product-details__size__button">
						Guia de medidas
					</button>
					<div className="product-details__size--wrapper">
						{sizeArr.map((item, index) => (
							<button className="product-details__size__dot" key={index}>
								{item}
							</button>
						))}
					</div>
				</div>

				<Button color="secondary" name="Adicionar à sacola" size="large" />

				<p className="product-details__description">{description}</p>
			</div>
		);
	}
}
