import React from 'react';
import IconButton from '../IconButton/IconButton';

import './Pagination.scss';

const Pagination = () => (
	<div className="pagination">
		<IconButton
			color="secondary"
			disabled
			icon="chevron-left"
			onClick={() => alert('Produtos anteriores')}
			size="small"
		/>
		<div className="pagination__info">1 de 10</div>
		<IconButton
			color="secondary"
			icon="chevron-right"
			onClick={() => alert('Produtos posteriores')}
			size="small"
		/>
	</div>
);

export default Pagination;
