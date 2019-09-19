import React from 'react';
import TableBox from './TableBox';
import PropTypes from 'prop-types';

const Report = ({ busData, organisation, date }) => {
	return (
		<div>
			{organisation} - {date}
			<TableBox busData={busData} />
		</div>
	);
};

Report.propTypes = {
	busData: PropTypes.array,
	organisation: PropTypes.string,
	date: PropTypes.string,
	index: PropTypes.number,
};

export default Report;
