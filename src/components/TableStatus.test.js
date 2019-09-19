import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableStatus from './TableStatus';

configure({ adapter: new Adapter() });

function setup() {
	const props = { status: 123 };

	const mountWrapper = mount(<TableStatus {...props} data-test="test" />);
	const shallowWrapper = shallow(<TableStatus {...props} data-test="test" />);

	return {
		props,
		mountWrapper,
		shallowWrapper,
	};
}

describe('TableStatus component', () => {
	const { shallowWrapper, mountWrapper } = setup();

	it('should render', () => {
		expect(mountWrapper.exists('[data-test]')).toEqual(true);
	});

	it('should render correct props', () => {
		expect(mountWrapper.text().includes(123)).toBe(true);
	});
});
