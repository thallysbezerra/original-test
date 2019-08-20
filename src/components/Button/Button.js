import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default class Button extends Component {
	searchResult(param) {
		switch (param) {
			case 'small':
				return 'small';
			case 'large':
				return 'large';
			case 'extra-large':
				return 'extra-large';
			default:
				return 'medium';
		}
	}

	render() {
		const { className, color, id, onClick, name, size } = this.props;
		return (
			<div className={`button--wrapper ${className ? className : ''}`}>
				<button
					className={`button button--${this.searchResult(size)} button--${
						color ? color : ''
					}`}
					id={id}
					onClick={onClick}
				>
					{name}
				</button>
			</div>
		);
	}
}

Button.propTypes = {
	color: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	size: PropTypes.string
};

Button.defaultProps = {
	color: 'primary',
	onClick: () => console.log('Do something')
};
