import React from 'react';
import TextField from './TextField';

import renderer from 'react-test-renderer';

describe('TextField UI', () => {
	it('<TextField /> must have the snapshot version.', () => {
		const tree = renderer.create(<TextField />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
