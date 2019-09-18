import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableBox from './TableBox';

configure({ adapter: new Adapter() });

function setup() {
	const props = {};

	const mountWrapper = mount(<TableBox {...props} data-test="test" />);
	const shallowWrapper = shallow(<TableBox {...props} data-test="test" />);

	return {
		props,
		mountWrapper,
		shallowWrapper,
	};
}

describe('Table item component', () => {
	const { shallowWrapper, mountWrapper } = setup();

	it('should render', () => {
		expect(mountWrapper.exists('[data-test]')).toEqual(true);
	});
});
