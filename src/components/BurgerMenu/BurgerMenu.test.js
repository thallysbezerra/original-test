import React from 'react';
import BurgerMenu from './BurgerMenu';

import renderer from 'react-test-renderer';

describe('BurgerMenu UI', () => {
	it('<BurgerMenu /> must have the snapshot version.', () => {
		const tree = renderer.create(<BurgerMenu />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
