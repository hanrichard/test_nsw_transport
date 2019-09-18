import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

configure({ adapter: new Adapter() });

function setup() {
	const props = {};

	const mountWrapper = mount(<Home {...props} data-test="test" />);

	return {
		props,
		mountWrapper,
	};
}

describe('Reports component', () => {
	const { mountWrapper } = setup();

	it('should render', () => {
		expect(mountWrapper.exists('[data-test]')).toEqual(true);
	});
});
