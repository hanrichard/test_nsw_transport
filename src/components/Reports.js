import React from 'react';

const Reports = props => {
	const showReport = props.data.data.map(report => {
		return <div key={report.organisation}>{report.organisation}</div>;
	});

	return (
		<div className="Home">
			Bus Reports
			{showReport}
		</div>
	);
};

export default Reports;
