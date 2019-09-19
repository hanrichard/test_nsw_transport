export const calStatus = (status, statusClass) => {
	const preStatusClass = statusClass === 'statusClass' ? 'status--' : '';
	if (status > 100) {
		return preStatusClass + 'Late';
	} else if (status < 100 && status > 0) {
		return preStatusClass + 'OnTime';
	} else if (status < 0) {
		return preStatusClass + 'Early';
	} else {
		return preStatusClass + 'Unkown';
	}
};
