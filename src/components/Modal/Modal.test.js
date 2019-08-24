import React from 'react';
import Modal from './Modal';

import renderer from 'react-test-renderer';

describe('Modal UI', () => {
	it('<Modal /> must have the snapshot version.', () => {
		const tree = renderer.create(<Modal />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
