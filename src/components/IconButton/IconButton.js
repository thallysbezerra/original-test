import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.scss';

const IconButton = ({ className, color, disabled, icon, onClick, size }) => (
	<button
		className={`icon-button icon-button--${color} icon-button--${size} ${className}`}
		onClick={onClick}
		disabled={disabled && disabled}
	>
		<i className={`icon-button__icon fas fa-${icon}`} />
	</button>
);

IconButton.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	icon: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	size: PropTypes.string
};

IconButton.defaultProps = {
	className: '',
	color: 'primary',
	icon: 'question-circle',
	onClick: () => console.log('Do something'),
	size: 'medium'
};

export default IconButton;
