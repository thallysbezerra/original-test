import React, { Component } from 'react';

import IconButton from '../../components/IconButton/IconButton';

import './ProductMedias.scss';

export default class ProductMedias extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgToShow: this.props.imgArr[0].imgUrl
		};
	}

	handleChangeImg = imgNumber => {
		this.setState({
			imgToShow: this.props.imgArr[imgNumber].imgUrl
		});
	};

	render() {
		const { imgArr, principalImg, title } = this.props;

		return (
			<div className="product-medias">
				<div className="product-medias--container">
					<div className="product-medias__list__video-area">
						<small className="product-medias__list__video-area__title">
							Vídeo
						</small>
						<IconButton color="secondary" icon="play" size="small" />
					</div>
					<ul className="product-medias__list">
						<button className={`product-medias__list__button product-medias__list__button--up fa fa-chevron-up ${imgArr.length <= 4 ? 'hide' : ''}`} />
						{imgArr.map((item, index) => (
							<li className="product-medias__list__item" key={index}>
								<img
									alt={index}
									className="product-medias__list__item__img"
									onClick={() => this.handleChangeImg(index)}
									src={item.thumbnail}
								/>
							</li>
						))}
						<button className={`product-medias__list__button product-medias__list__button--down fa fa-chevron-down ${imgArr.length <= 4 ? 'hide' : ''}`} />
					</ul>
				</div>
				<div className="product-medias__img--container">
					<img
						className="product-medias__img"
						src={principalImg}
						alt={title}
					/>
				</div>
			</div>
		);
	}
}
