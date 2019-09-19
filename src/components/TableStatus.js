import React from 'react';
import { calStatus } from '../utility/utility';
import PropTypes from 'prop-types';

const TableStatus = ({ status }) => {
	return <div className={calStatus(status, 'statusClass')}>{calStatus(status)}</div>;
};

TableStatus.propTypes = {
	status: PropTypes.number,
};

export default TableStatus;
