import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = ({ children, onClickCloseModal, modalIsActive }) => (
	<div className={`modal--shadow ${modalIsActive ? 'active' : ''}`}>
		<div className={`modal ${modalIsActive ? 'active' : ''}`}>
			<button className="modal__button--close" onClick={onClickCloseModal}>
				<i className="fas fa-close" />
			</button>
			{children}
		</div>
	</div>
);

Modal.propTypes = {
	showModal: PropTypes.bool.isRequired
};

Modal.defaultProps = {
	showModal: false
};

export default Modal;
