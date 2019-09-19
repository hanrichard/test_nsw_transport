import React from 'react';
import TableBox from './TableBox';

const Report = ({ busData, organisation, date }) => {
	return (
		<div>
			{organisation} - {date}
			<TableBox busData={busData} />
		</div>
	);
};

export default Report;
