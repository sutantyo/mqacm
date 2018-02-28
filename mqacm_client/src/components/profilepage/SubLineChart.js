import React, { Component } from 'react';
import moment from 'moment';
const LineChart = require('react-chartjs').Line;

export default class SubLineChart extends Component {
	constructor(props){
		super(props);
		this.state = {
			period: 'none',
			subs: props.data
		}
		console.log(this.state.subs);
	}
	getSubsInPeriod(start, end){
		return this.state.subs.filter((prob) => {
			const probUnix = moment.unix(prob[4]);
			return (probUnix >= start && probUnix <= end);
		});
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			subs: nextProps.data
		})
	}
	createLineData(subs){
		return {
			labels: [
				moment().subtract(12, 'months').format('MMM YY'),
				moment().subtract(11, 'months').format('MMM YY'),
				moment().subtract(10, 'months').format('MMM YY'),
				moment().subtract(9, 'months').format('MMM YY'),
				moment().subtract(8, 'months').format('MMM YY'),
				moment().subtract(7, 'months').format('MMM YY'),
				moment().subtract(6, 'months').format('MMM YY'),
				moment().subtract(5, 'months').format('MMM YY'),
				moment().subtract(4, 'months').format('MMM YY'),
				moment().subtract(3, 'months').format('MMM YY'),
				moment().subtract(2, 'months').format('MMM YY'),
				moment().subtract(1, 'months').format('MMM YY'),
				moment().format('MMM YY')
			],
			datasets: [
				{
					label: 'Accepted Answers',
					fillColor: 'rgba(0, 255, 0, 0.2)',
					strokeColor: 'rgba(0, 255, 0, 0.5)',
					pointColor: 'rgba(0, 255, 0, 0.8)',
					pointStrokColor: 'rgba(0, 255, 0, 1)',
					pointHighlightFill: 'rgba(0, 255, 0.4)',
					pointHighlightStroke: 'rgba(0, 255, 0.6)',
					data: [
						this.getSubsInPeriod(moment().subtract(12, 'months').startOf('month'), moment().subtract(12, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(11, 'months').startOf('month'), moment().subtract(11, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(10, 'months').startOf('month'), moment().subtract(10, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(9, 'months').startOf('month'), moment().subtract(9, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(8, 'months').startOf('month'), moment().subtract(8, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(7, 'months').startOf('month'), moment().subtract(7, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(6, 'months').startOf('month'), moment().subtract(6, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(5, 'months').startOf('month'), moment().subtract(5, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(4, 'months').startOf('month'), moment().subtract(4, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(3, 'months').startOf('month'), moment().subtract(3, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(2, 'months').startOf('month'), moment().subtract(2, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().subtract(1, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month')).length,
						this.getSubsInPeriod(moment().startOf('month'), moment().endOf('month')).length
					]
				}
			]
		}
	}
	render(){
		const chartData = this.createLineData();
		return (
			<LineChart data={chartData} redraw width="600" height="250"/>
		);
	}
}