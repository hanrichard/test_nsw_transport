import React from 'react';
import { calStatus } from '../utility/utility';

const TableStatus = ({ status }) => {
	return <div className={calStatus(status, 'statusClass')}>{calStatus(status)}</div>;
};

export default TableStatus;
