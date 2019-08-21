import React from 'react';
import Pagination from './Pagination';

import renderer from 'react-test-renderer';

describe('Pagination UI', () => {
	it('<Pagination /> must have the snapshot version.', () => {
		const tree = renderer.create(<Pagination />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
