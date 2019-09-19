import React from 'react';
import TableBox from './TableBox';
import PropTypes from 'prop-types';
import Note from './Note';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const Wrapper = styled.div`
	width: 100%;
`;

const Report = ({ busData, organisation, date }) => {
	return (
		<ExpansionPanel className="report">
			<ExpansionPanelSummary aria-controls="panel1a-content" expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h5" component="h2" gutterBottom>
					{organisation} - {date}
				</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Wrapper>
					<TableBox busData={busData} />
					<Note />
				</Wrapper>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

Report.propTypes = {
	busData: PropTypes.array,
	organisation: PropTypes.string,
	date: PropTypes.string,
	index: PropTypes.number,
};

export default Report;
