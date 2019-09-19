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

export const formatStatusStrong = routeVariant => {
	return routeVariant.split(' ')[0];
};

export const formatStatusRegular = routeVariant => {
	let num = '';
	for (let i = 1; i < routeVariant.split(' ').length; i++) {
		num += ' ' + routeVariant.split(' ')[i];
	}
	return routeVariant === 'UNKNOWN' ? '' : num;
};
