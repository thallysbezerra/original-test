import React from 'react';
import Cart from './Cart';

import renderer from 'react-test-renderer';

describe('Cart UI', () => {
	it('<Cart /> must have the snapshot version.', () => {
		const tree = renderer.create(<Cart />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
