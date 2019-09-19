import React from 'react';
import TableStatus from './TableStatus';
import PropTypes from 'prop-types';

const TableBox = ({ busData }) => {
	const showTableRow = busData.map(item => {
		return (
			<div key={item.busId}>
				{item.busId}
				{item.routeVariant}
				<TableStatus status={item.deviationFromTimetable} />
			</div>
		);
	});
	return <div>{showTableRow}</div>;
};

TableBox.propTypes = {
	busData: PropTypes.array,
};

export default TableBox;
