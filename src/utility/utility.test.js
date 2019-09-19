import { calStatus } from '../utility/utility';

describe('utlity component', () => {
	it('should render correct numbers', () => {
		expect(calStatus(123)).toBe('Late');
		expect(calStatus(-123)).toBe('Early');
		expect(calStatus(23)).toBe('OnTime');
		expect(calStatus(123, 'statusClass')).toBe('status--Late');
		expect(calStatus(23, 'statusClass')).toBe('status--OnTime');
		expect(calStatus(-123, 'statusClass')).toBe('status--Early');
	});
});
