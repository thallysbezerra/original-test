import React, { Component } from 'react';
import Button from '../../components/Button/Button';

import monetaryMask from '../../helpers/monetaryMask';
import Modal from '../../components/Modal/Modal';

import './ProductDetails.scss';

export default class ProductInfo extends Component {
	constructor({ colorActive, colorSelected, sizeActive, sizeSelected }) {
		super();
		this.state = {
			modalIsActive: false,
			colorActive,
			colorSelected,
			sizeActive,
			sizeSelected
		};
	}

	UNSAFE_componentWillReceiveProps({
		colorActive,
		colorSelected,
		sizeActive,
		sizeSelected
	}) {
		this.setState({
			...this.state,
			colorActive,
			colorSelected,
			sizeActive,
			sizeSelected
		});
	}

	handleChangeColor = arrPos => {
		this.setState({
			colorActive: arrPos,
			colorSelected: this.props.colorArr[arrPos].colorName
		});
	};

	handleChangeSize = arrPos => {
		this.setState({
			sizeActive: arrPos,
			sizeSelected: this.props.sizeArr[arrPos]
		});
	};

	handleAddProduct = () => {
		this.setState({
			modalIsActive: true
		});
	};

	handleCloseModal = () => {
		this.setState({
			modalIsActive: false
		});
	};

	render() {
		const {
			colorArr,
			description,
			imgToShow,
			installments,
			installmentsValue,
			model,
			originalPrice,
			promotionalPrice,
			reference,
			sizeArr,
			title
		} = this.props;

		const {
			modalIsActive,
			colorActive,
			colorSelected,
			sizeActive,
			sizeSelected
		} = this.state;

		return (
			<>
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
							{`Ou ${installments}x de ${monetaryMask(
								installmentsValue
							)}`}
						</small>
					</div>

					<div className="product-details__color">
						<span className="product-details__color__label">Cor:</span>
						<span className="product-details__color__name">
							({colorSelected})
						</span>
						<div className="product-details__color__dot--wrapper">
							{colorArr.map((item, index) => (
								<button
									className={`product-details__color__dot ${
										colorActive === index ? 'active' : ''
									}`}
									key={index}
									onClick={() => this.handleChangeColor(index)}
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
						<button
							className="product-details__size__button"
							onClick={() => alert('Exibe guia de medidas')}
						>
							Guia de medidas
						</button>
						<div className="product-details__size--wrapper">
							{sizeArr.map((item, index) => (
								<button
									className={`product-details__size__dot ${
										sizeActive === index ? 'active' : ''
									}`}
									key={index}
									onClick={() => this.handleChangeSize(index)}
								>
									{item !== 'Tamanho único' ? item : 'U'}
								</button>
							))}
						</div>
					</div>

					<Button
						color="secondary"
						onClick={() => this.handleAddProduct()}
						name="Adicionar à sacola"
						size="large"
					/>

					<p className="product-details__description">{description}</p>
				</div>
				<Modal
					modalIsActive={modalIsActive}
					onClickCloseModal={() => this.handleCloseModal()}
				>
					<img src={imgToShow} alt={title} className="modal__img" />
					<div className="modal__msg">Adicionado com sucesso!</div>

					<Button
						color="secondary"
						onClick={() => this.handleCloseModal()}
						name="Finalizar compra"
					/>

					<Button
						className="modal__button--keep-buying"
						onClick={() => this.handleCloseModal()}
						name="Continuar comprando"
					/>
				</Modal>
			</>
		);
	}
}
