import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reports from './Reports';
import Report from './Report';

configure({ adapter: new Adapter() });

function setup() {
	const props = {};

	const shallowWrapper = shallow(<Reports {...props} data-test="test" />);
	const mountWrapper = mount(<Reports {...props} data-test="test" />);

	return {
		props,
		shallowWrapper,
		mountWrapper,
	};
}

describe('Reports component', () => {
	const { mountWrapper, shallowWrapper } = setup();

	it('should render', () => {
		expect(mountWrapper.exists('[data-test]')).toEqual(true);
	});
});
