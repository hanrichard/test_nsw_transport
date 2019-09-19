import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Report from './Report';

configure({ adapter: new Adapter() });

function setup() {
	const props = {
		organisation: 'Westbus',
		date: '25/09/2015',
		busData: [
			{
				busId: '94811',
				routeVariant: '664 2 1',
				deviationFromTimetable: 164,
			},
		],
	};

	const mountWrapper = mount(<Report {...props} data-test="test" />);
	const shallowWrapper = shallow(<Report {...props} data-test="test" />);

	return {
		props,
		mountWrapper,
		shallowWrapper,
	};
}

describe('Report item component', () => {
	const { shallowWrapper, mountWrapper } = setup();

	it('should render', () => {
		expect(mountWrapper.exists('[data-test]')).toEqual(true);
	});

	it('should render correct props', () => {
		expect(mountWrapper.text().includes('Westbus')).toBe(true);
		expect(mountWrapper.text().includes('25/09/2015')).toBe(true);
	});
});
