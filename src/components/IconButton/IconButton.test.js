import React from 'react';
import IconButton from './IconButton';

import renderer from 'react-test-renderer';

describe('IconButton UI', () => {
	it('<IconButton /> must have the snapshot version.', () => {
		const tree = renderer.create(<IconButton />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
