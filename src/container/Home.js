import React from 'react';
import busData from '../data/bus-services-data.json';
import Reports from '../components/Reports';

const Home = () => {
	const data = busData;

	return (
		<div className="Home">
			<Reports data={data} />
		</div>
	);
};

export default Home;
