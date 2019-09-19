import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Home from '../container/Home';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
`;

function App() {
	return (
		<Wrapper>
			<Container maxWidth="sm">
				<Home />
			</Container>
		</Wrapper>
	);
}

export default App;
