import React from 'react';
const PieChart = require('react-chartjs').Pie;

const createPieData = (subs) => {
	let counts = {
		submissionError: 0,
		cantBeJudged: 0,
		inQueue: 0,
		compileError: 0,
		restrictedFunction: 0,
		runtimeError: 0,
		outputLimit: 0,
		timeLimit: 0,
		memoryLimit: 0,
		wrongAnswer: 0,
		presentationError: 0,
		accepted: 0
	}
	subs.forEach((prob) => {
		switch(prob[2]){
			case 10:
				counts.submissionError += 1;
				break;
			case 15:
				counts.cantBeJudged += 1;
				break;
			case 20:
				counts.inQueue += 1;
				break;
			case 30:
				counts.compileError += 1;
				break;
			case 35:
				counts.restrictedFunction += 1;
				break;
			case 40:
				counts.runtimeError += 1;
				break;
			case 45:
				counts.outputLimit += 1;
				break;
			case 50:
				counts.timeLimit += 1;
				break;
			case 60:
				counts.memoryLimit += 1;
				break;
			case 70:
				counts.wrongAnswer += 1;
				break;
			case 80:
				counts.presentationError += 1;
				break;
			case 90:
				counts.accepted += 1;
				break;
			default:
				break;
		}
	});
	return [
		{
			value: counts.submissionError,
			color: "#F7464A",
			highlight: "#FF5A5E",
			label: "Submission Error"
		},
		{
			value: counts.cantBeJudged,
			color: "#F7464A",
			highlight: "#FF5A5E",
			label: "Can't Be Judged"
		},
		{
			value: counts.inQueue,
			color: "#F7464A",
			highlight: "#FF5A5E",
			label: "In Queue"
		},
		{
			value: counts.compileError,
			color: "#fc1111",
			highlight: "#ff7777",
			label: "Compile Error"
		},
		{
			value: counts.restrictedFunction,
			color: "#F7464A",
			highlight: "#FF5A5E",
			label: "Restricted Function"
		},
		{
			value: counts.runtimeError,
			color: "#f9ab0e",
			highlight: "#fccd6f",
			label: "Runtime Error"
		},
		{
			value: counts.outputLimit,
			color: "#F7464A",
			highlight: "#FF5A5E",
			label: "Output Limit"
		},
		{
			value: counts.timeLimit,
			color: "#dee520",
			highlight: "#e7ed3b",
			label: "Time Limit"
		},
		{
			value: counts.memoryLimit,
			color: "#F7464A",
			highlight: "#FF5A5E",
			label: "Memory Limit"
		},
		{
			value: counts.wrongAnswer,
			color: "#ff6721",
			highlight: "#fc8c58",
			label: "Wrong Answer"
		},
		{
			value: counts.presentationError,
			color: "#346ad8",
			highlight: "#4c77ce",
			label: "Presentation Error"
		},
		{
			value: counts.accepted,
			color: "#1caf2f",
			highlight: "#21d138",
			label: "Accepted"
		}
	];
}

let pieStyle = {
	display: "flex",
	"justify-content": "space-evenly" 
}

const SubTypePieChart = (props) => {
	const chartData = createPieData(props.data);
	let totalSubs = 0;
	chartData.forEach((type) => totalSubs += type.value);
	const chartBreakdown = chartData.sort((a, b) => b.value-a.value).filter((countObj) => countObj.value > 0);
	return (
		<div style={pieStyle}>
			<div>
				<PieChart data={chartData} redraw height="250"/>
			</div>
			<div>
				<h3>Total Submissions: {totalSubs}</h3>
				{chartBreakdown.map((countObj) =>
					<p>{countObj.label}: {countObj.value} ({(countObj.value/totalSubs*100).toFixed(2)}%)</p>)}
			</div>
		</div>
	);
}

export default SubTypePieChart;