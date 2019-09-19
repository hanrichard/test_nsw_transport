import { calStatus, formatStatusStrong, formatStatusRegular } from '../utility/utility';

describe('utlity component', () => {
	it('should render correct numbers', () => {
		expect(calStatus(123)).toBe('Late');
		expect(calStatus(-123)).toBe('Early');
		expect(calStatus(23)).toBe('OnTime');
		expect(calStatus(123, 'statusClass')).toBe('status--Late');
		expect(calStatus(23, 'statusClass')).toBe('status--OnTime');
		expect(calStatus(-123, 'statusClass')).toBe('status--Early');
	});
	it('should render correct numbers format', () => {
		expect(formatStatusStrong('123 2 3')).toBe('123');
		expect(formatStatusRegular('123 2 3')).toBe(' 2 3');
		expect(formatStatusStrong('UNKNOWN')).toBe('UNKNOWN');
		expect(formatStatusRegular('UNKNOWN')).toBe('');
	});
});
