import React from 'react';
import TableStatus from './TableStatus';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { formatStatusStrong, formatStatusRegular } from '../utility/utility';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 30px;

	.MuiTableCell-head {
		background-color: lightblue;
		color: rgba(0, 0, 0, 0.87);
	}
	.MuiTableCell-root {
		padding: 10px;
	}
`;

const TableBox = ({ busData }) => {
	const showTableRow = busData.map(showTableRow => {
		return (
			<TableRow key={showTableRow.busId}>
				<TableCell className="tableCell-busId">{showTableRow.busId}</TableCell>
				<TableCell className="tableCell-routeVariant">
					<strong>{formatStatusStrong(showTableRow.routeVariant)}</strong>
					{formatStatusRegular(showTableRow.routeVariant)}
				</TableCell>
				<TableCell className="tableCell-deviationFromTimetable">
					<TableStatus status={showTableRow.deviationFromTimetable} />
				</TableCell>
			</TableRow>
		);
	});

	return (
		<Wrapper className="table">
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							<Typography variant="h6" component="p">
								Bus ID
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant="h6" component="p">
								Route Variant
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant="h6" component="p">
								Status
							</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{showTableRow}</TableBody>
			</Table>
		</Wrapper>
	);
};

TableBox.propTypes = {
	busData: PropTypes.array,
};

export default TableBox;
