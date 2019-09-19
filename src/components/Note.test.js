import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Note from './Note';

configure({ adapter: new Adapter() });

function setup() {
	const props = {};

	const shallowWrapper = shallow(<Note {...props} data-test="test" />);
	const mountWrapper = mount(<Note {...props} data-test="test" />);

	return {
		props,
		mountWrapper,
		shallowWrapper,
	};
}

describe('Note item component', () => {
	const { shallowWrapper, mountWrapper } = setup();

	it('should render', () => {
		expect(mountWrapper.exists('[data-test]')).toEqual(true);
	});

	it('on input', () => {
		shallowWrapper.find('#input').simulate('change', { target: { value: 23 } });
		expect(shallowWrapper.find('#input').props().value).toEqual(23);
	});

	it('on submit', () => {
		const mockEvent = { preventDefault: jest.fn() };
		shallowWrapper.find('#input').simulate('change', { target: { value: 23 } });
		shallowWrapper.find('#button').simulate('click', mockEvent);
		expect(shallowWrapper.exists('[data-test-note]')).toEqual(true);
	});
});
