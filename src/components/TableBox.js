import React from 'react';
import TableStatus from './TableStatus';

const TableBox = props => {
	const showTableRow = props.busData.map(item => {
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
export default TableBox;
