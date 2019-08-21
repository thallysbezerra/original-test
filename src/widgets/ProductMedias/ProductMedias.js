import React from 'react';
import IconButton from '../../components/IconButton/IconButton';
import './ProductMedias.scss';

const ProductMedias = ({ imgArr, principalImg, title }) => (
	<div className="product-details__img-area">
		<div className="product-details__img-area--container">
			<div className="product-details__img-area__list__video-area">
				<small className="product-details__img-area__list__video-area__title">
					Vídeo
				</small>
				<IconButton color="secondary" icon="play" size="small" />
			</div>
			<ul className="product-details__img-area__list">
				<button className="product-details__img-area__list__button product-details__img-area__list__button--up fa fa-chevron-up" />
				{imgArr.map((item, index) => (
					<li
						className="product-details__img-area__list__item"
						key={index}
					>
						<img
							alt={index}
							className="product-details__img-area__list__item__img"
							src={item.thumbnail}
						/>
					</li>
				))}
				<button className="product-details__img-area__list__button product-details__img-area__list__button--down fa fa-chevron-down" />
			</ul>
		</div>
		<div className="product-details__img-area__img--container">
			<img
				className="product-details__img-area__img"
				src={principalImg}
				alt={title}
			/>
		</div>
	</div>
);

export default ProductMedias;
