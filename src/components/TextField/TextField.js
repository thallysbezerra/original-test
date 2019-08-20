import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextField.scss';

export default class TextField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	render() {
		const {
			className,
			icon,
			id,
			onClickIcon,
			placeholder,
			type
		} = this.props;

		const { value } = this.state;

		return (
			<div
				className={`text-field ${className ? className : ''} ${
					value !== '' ? 'active' : ''
				}`}
			>
				<input
					className={`text-field__input text-field__input--${
						!icon ? 'no-icon' : ''
					}`}
					id={id}
					onChange={this.handleChange}
					type={type}
					value={value}
				/>
				{icon && (
					<button className="text-field__button" onClick={onClickIcon}>
						<i className={`text-field__button__icon fas fa-${icon}`} />
					</button>
				)}
				<label className="text-field__label">{placeholder}</label>
			</div>
		);
	}
}

TextField.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.string,
	id: PropTypes.string,
	onClickIcon: PropTypes.func,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string
};

TextField.defaultProps = {
	type: 'text'
};
