import React, { Component } from 'react';
import Button from '../../components/Button/Button';

import monetaryMask from '../../helpers/monetaryMask';

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
			<div className="product-details__infos">
				<h2 className="product-details__infos__title">{title}</h2>

				<small className="product-details__infos__ref">{`${model} | ${reference}`}</small>

				<div className="product-details__infos__price">
					<span className="product-details__infos__price--original">
						{monetaryMask(originalPrice)}
					</span>
					<span className="product-details__infos__price--promotional">
						{monetaryMask(promotionalPrice)}
					</span>
					<small className="product-details__infos__price--split">
						{`Ou ${installments}x de ${monetaryMask(installmentsValue)}`}
					</small>
				</div>

				<div className="product-details__infos__size">
					<span className="product-details__infos__size__label">Cor:</span>
					<span className="product-details__infos__size__name">
						({colorName})
					</span>
					{colorArr.map((item, index) => (
						<button
							className="product-details__infos__size__dot"
							key={index}
							style={{
								backgroundColor: item.hexColor
							}}
						/>
					))}
				</div>

				<div className="product-details__infos__size">
					<span className="product-details__infos__size__label">
						Tamanho:
					</span>
					<span className="product-details__infos__size__name">
						({sizeSelected})
					</span>
					<span className="product-details__infos__size__link">
						Guia de medidas
					</span>
					{sizeArr.map((item, index) => (
						<button
							className="product-details__infos__size__dot"
							key={index}
						>
							{item}
						</button>
					))}
				</div>

				<Button color="secondary" name="Adicionar à sacola" size="large" />

				<p className="product-details__infos__description">{description}</p>
			</div>
		);
	}
}
