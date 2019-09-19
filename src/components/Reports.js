import React from 'react';
import Report from './Report';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Reports = props => {
	const showReport = props.data.data.map(report => {
		return <Report key={report.organisation} {...report} />;
	});

	return (
		<div className="Home">
			<Typography variant="h4" component="h1" gutterBottom>
				Bus Reports
			</Typography>
			{showReport}
		</div>
	);
};

Reports.propTypes = {
	props: PropTypes.object,
};

export default Reports;
