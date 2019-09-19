import React from 'react';
import Report from './Report';

const Reports = props => {
	const showReport = props.data.data.map(report => {
		return <Report key={report.organisation} {...report} />;
	});

	return (
		<div className="Home">
			Bus Reports
			{showReport}
		</div>
	);
};

export default Reports;
