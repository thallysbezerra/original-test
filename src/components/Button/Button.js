import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ className, color, id, onClick, name, size }) => (
	<div className={`button--wrapper ${className ? className : ''}`}>
		<button
			className={`button button--${size} button--${color ? color : ''}`}
			id={id}
			onClick={onClick}
		>
			{name}
		</button>
	</div>
);

Button.propTypes = {
	color: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	size: PropTypes.string
};

Button.defaultProps = {
	color: 'primary',
	name: 'Needs a name',
	onClick: () => console.log('Do something'),
	size: 'medium'
};

export default Button;
