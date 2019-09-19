import React from 'react';
import styled from 'styled-components';
import { calStatus } from '../utility/utility';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	&.status--Late {
		color: blue;
	}
	&.status--OnTime {
		color: green;
	}
	&.status--Early {
		color: red;
	}
`;

const TableStatus = ({ status }) => {
	return <Wrapper className={'status ' + calStatus(status, 'statusClass')}>{calStatus(status)}</Wrapper>;
};

TableStatus.propTypes = {
	status: PropTypes.number,
};

export default TableStatus;
