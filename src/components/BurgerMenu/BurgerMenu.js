import React from 'react';
import PropTypes from 'prop-types';

import './BurgerMenu.scss';

const BurgerMenu = ({ onClick, status }) => (
	<button className="burger-menu" onClick={onClick}>
		<i className={`burger-menu__icon fas fa-${!status ? 'bars' : 'times'}`} />
	</button>
);

BurgerMenu.propTypes = {
	status: PropTypes.bool,
	onClick: PropTypes.func
};

export default BurgerMenu;
