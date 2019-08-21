import React from 'react';
import IconButton from '../../components/IconButton/IconButton';
import './ProductMedias.scss';

const ProductMedias = ({ imgArr, principalImg, title }) => (
	<div className="product-medias">
		<div className="product-medias--container">
			<div className="product-medias__list__video-area">
				<small className="product-medias__list__video-area__title">
					Vídeo
				</small>
				<IconButton color="secondary" icon="play" size="small" />
			</div>
			<ul className="product-medias__list">
				<button className="product-medias__list__button product-medias__list__button--up fa fa-chevron-up" />
				{imgArr.map((item, index) => (
					<li className="product-medias__list__item" key={index}>
						<img
							alt={index}
							className="product-medias__list__item__img"
							src={item.thumbnail}
						/>
					</li>
				))}
				<button className="product-medias__list__button product-medias__list__button--down fa fa-chevron-down" />
			</ul>
		</div>
		<div className="product-medias__img--container">
			<img className="product-medias__img" src={principalImg} alt={title} />
		</div>
	</div>
);

export default ProductMedias;
