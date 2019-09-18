import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Note from './Note';

configure({ adapter: new Adapter() });

function setup() {
	const props = {};

	const shallowWrapper = shallow(<Note {...props} />);

	return {
		props,
		shallowWrapper,
	};
}

describe('Note item component', () => {
	it('should render', () => {
		const { shallowWrapper } = setup();
		expect(shallowWrapper.find('div')).toHaveLength(1);
	});
});
