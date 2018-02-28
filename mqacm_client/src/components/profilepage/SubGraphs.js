import React from 'react';
import SubPieChart from './SubPieChart';
import SubLineChart from './SubLineChart';

const SubGraphs = (props) => {
	const chartData = props.data.data.subs;
	return (
		<div>
			<SubLineChart data={chartData} />
			<SubPieChart data={chartData} />
		</div>
	);
};

export default SubGraphs;