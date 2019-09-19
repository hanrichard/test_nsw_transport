import React from 'react';
import Report from './Report';
import PropTypes from 'prop-types';

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

Reports.propTypes = {
	props: PropTypes.object,
};

export default Reports;
