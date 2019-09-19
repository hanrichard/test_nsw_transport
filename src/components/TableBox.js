import React from 'react';

const TableBox = props => {
	const showTableRow = props.busData.map(item => {
		return (
			<div key={item.busId}>
				{item.busId}
				{item.routeVariant}
				{item.deviationFromTimetable}
			</div>
		);
	});
	return <div>{showTableRow}</div>;
};
export default TableBox;
