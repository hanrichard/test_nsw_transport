import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableBox from './TableBox';

configure({ adapter: new Adapter() });

function setup() {
	const props = {
		busData: [
			{
				busId: '94811',
				routeVariant: '664 2 1',
				deviationFromTimetable: 164,
			},
		],
	};

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

	it('should render correct props', () => {
		expect(mountWrapper.text().includes('94811')).toBe(true);
		expect(mountWrapper.text().includes('664 2 1')).toBe(true);
		expect(mountWrapper.text().includes('Late')).toBe(true);
	});
});
