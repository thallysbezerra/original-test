import React from 'react';
import PropTypes from 'prop-types';

import './Cart.scss';

const Cart = ({ itemsQuantity }) => (
	<div className="cart">
		<i className="cart__icon fas fa-shopping-bag" />
		<span className="car__items-quantity">{itemsQuantity}</span>
	</div>
);

Cart.propTypes = {
	itemsQuantity: PropTypes.number.isRequired
};

Cart.defaultProps = {
	itemsQuantity: 0
};

export default Cart;
