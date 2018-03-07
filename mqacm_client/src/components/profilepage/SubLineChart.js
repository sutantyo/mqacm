import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import moment from 'moment';
const LineChart = require('react-chartjs').Line;

export default class SubLineChart extends Component {
	constructor(props){
		super(props);
		this.state = {
			period: 1,
			subs: props.data,
			displayAccepted: true,
			displayRejected: true
		}
	}
	getSubsInPeriod(start, end, verdictID){
		if(this.state.period === 3 && !this.state.displayRejected){
			console.log('Start: '+start.format('MMM YY')+ ' End: '+end.format('MMM YY'));
		}
		return this.state.subs.filter((prob) => {
			const probUnix = moment.unix(prob[4]);
			if(this.state.period === 3 && !this.state.displayRejected){
				console.log('Problem: '+probUnix);
			}
			if(verdictID === 90){
				return (probUnix.isBetween(start, end)) && prob[2] === verdictID;
			}
			else {
				return (probUnix >= start && probUnix <= end) && prob[2] <= verdictID;
			}
		});
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			subs: nextProps.data
		})
	}
	createLineDataLastYear(subs){
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
					label: 'Accepted Submissions',
					fillColor: 'rgba(0, 255, 0, 0.2)',
					strokeColor: 'rgba(0, 255, 0, 0.5)',
					pointColor: 'rgba(0, 255, 0, 0.8)',
					pointStrokColor: 'rgba(0, 255, 0, 1)',
					pointHighlightFill: 'rgba(0, 255, 0.4)',
					pointHighlightStroke: 'rgba(0, 255, 0.6)',
					data: [
						this.getSubsInPeriod(moment().subtract(12, 'months').startOf('month'), moment().subtract(12, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(11, 'months').startOf('month'), moment().subtract(11, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(10, 'months').startOf('month'), moment().subtract(10, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(9, 'months').startOf('month'), moment().subtract(9, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(8, 'months').startOf('month'), moment().subtract(8, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(7, 'months').startOf('month'), moment().subtract(7, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(6, 'months').startOf('month'), moment().subtract(6, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(5, 'months').startOf('month'), moment().subtract(5, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(4, 'months').startOf('month'), moment().subtract(4, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(3, 'months').startOf('month'), moment().subtract(3, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(2, 'months').startOf('month'), moment().subtract(2, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().subtract(1, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month'), 90).length,
						this.getSubsInPeriod(moment().startOf('month'), moment().endOf('month'), 90).length
					]
				},
				{
					label: 'Rejected Submissions',
					fillColor: 'rgba(255, 0, 0, 0.2)',
					strokeColor: 'rgba(255, 0, 0, 0.5)',
					pointColor: 'rgba(255, 0, 0, 0.8)',
					pointStrokColor: 'rgba(255, 0, 0, 1)',
					pointHighlightFill: 'rgba(255, 0, 0.4)',
					pointHighlightStroke: 'rgba(255, 0, 0.6)',
					data : [
						this.getSubsInPeriod(moment().subtract(12, 'months').startOf('month'), moment().subtract(12, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(11, 'months').startOf('month'), moment().subtract(11, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(10, 'months').startOf('month'), moment().subtract(10, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(9, 'months').startOf('month'), moment().subtract(9, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(8, 'months').startOf('month'), moment().subtract(8, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(7, 'months').startOf('month'), moment().subtract(7, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(6, 'months').startOf('month'), moment().subtract(6, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(5, 'months').startOf('month'), moment().subtract(5, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(4, 'months').startOf('month'), moment().subtract(4, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(3, 'months').startOf('month'), moment().subtract(3, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(2, 'months').startOf('month'), moment().subtract(2, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().subtract(1, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month'), 80).length,
						this.getSubsInPeriod(moment().startOf('month'), moment().endOf('month'), 80).length
					]
				}
			]
		}
	}
	createLineDataLastThreeMonths(subs){
		return {
			labels: [
				moment().subtract(12, 'weeks').format('Do YY'),
				moment().subtract(11, 'weeks').format('Do YY'),
				moment().subtract(10, 'weeks').format('Do YY'),
				moment().subtract(9, 'weeks').format('Do YY'),
				moment().subtract(8, 'weeks').format('Do YY'),
				moment().subtract(7, 'weeks').format('Do YY'),
				moment().subtract(6, 'weeks').format('Do YY'),
				moment().subtract(5, 'weeks').format('Do YY'),
				moment().subtract(4, 'weeks').format('Do YY'),
				moment().subtract(3, 'weeks').format('Do YY'),
				moment().subtract(2, 'weeks').format('Do YY'),
				moment().subtract(1, 'weeks').format('Do YY'),
				moment().format('Do YY')
			],
			datasets: [
				{
					label: 'Accepted Submissions',
					fillColor: 'rgba(0, 255, 0, 0.2)',
					strokeColor: 'rgba(0, 255, 0, 0.5)',
					pointColor: 'rgba(0, 255, 0, 0.8)',
					pointStrokColor: 'rgba(0, 255, 0, 1)',
					pointHighlightFill: 'rgba(0, 255, 0.4)',
					pointHighlightStroke: 'rgba(0, 255, 0.6)',
					data: [
						this.getSubsInPeriod(moment().subtract(12, 'weeks').startOf('weeks'), moment().subtract(12, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(11, 'weeks').startOf('weeks'), moment().subtract(11, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(10, 'weeks').startOf('weeks'), moment().subtract(10, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(9, 'weeks').startOf('weeks'), moment().subtract(9, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(8, 'weeks').startOf('weeks'), moment().subtract(8, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(7, 'weeks').startOf('weeks'), moment().subtract(7, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(6, 'weeks').startOf('weeks'), moment().subtract(6, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(5, 'weeks').startOf('weeks'), moment().subtract(5, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(4, 'weeks').startOf('weeks'), moment().subtract(4, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(3, 'weeks').startOf('weeks'), moment().subtract(3, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(2, 'weeks').startOf('weeks'), moment().subtract(2, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().subtract(1, 'weeks').startOf('weeks'), moment().subtract(1, 'weeks').endOf('weeks'), 90).length,
						this.getSubsInPeriod(moment().startOf('week'), moment().endOf('week'), 90).length
					]
				},
				{
					label: 'Rejected Submissions',
					fillColor: 'rgba(255, 0, 0, 0.2)',
					strokeColor: 'rgba(255, 0, 0, 0.5)',
					pointColor: 'rgba(255, 0, 0, 0.8)',
					pointStrokColor: 'rgba(255, 0, 0, 1)',
					pointHighlightFill: 'rgba(255, 0, 0.4)',
					pointHighlightStroke: 'rgba(255, 0, 0.6)',
					data : [
						this.getSubsInPeriod(moment().subtract(12, 'weeks').startOf('weeks'), moment().subtract(12, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(11, 'weeks').startOf('weeks'), moment().subtract(11, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(10, 'weeks').startOf('weeks'), moment().subtract(10, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(9, 'weeks').startOf('weeks'), moment().subtract(9, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(8, 'weeks').startOf('weeks'), moment().subtract(8, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(7, 'weeks').startOf('weeks'), moment().subtract(7, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(6, 'weeks').startOf('weeks'), moment().subtract(6, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(5, 'weeks').startOf('weeks'), moment().subtract(5, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(4, 'weeks').startOf('weeks'), moment().subtract(4, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(3, 'weeks').startOf('weeks'), moment().subtract(3, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(2, 'weeks').startOf('weeks'), moment().subtract(2, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().subtract(1, 'weeks').startOf('weeks'), moment().subtract(1, 'weeks').endOf('weeks'), 80).length,
						this.getSubsInPeriod(moment().startOf('week'), moment().endOf('week'), 80).length
					]
				}
			]
		}
	}
	createLineDataLifetime(subs){
		const sortedSubs = subs.sort((a, b) => a[4]-b[4]);
		let lifetimePeriod = 'weeks';
		if(moment.unix(sortedSubs[0][4]).isBefore(moment().subtract(3, 'years'))){
			lifetimePeriod = 'months';
		} else if (moment.unix(sortedSubs[0][4]).isBefore(moment().subtract(1, 'month'))){
			lifetimePeriod = 'days'
		}
		const now = moment();
		const startTimeLabel = moment.unix(sortedSubs[0][4]);
		const differencePerColumn = parseInt(now.diff(startTimeLabel, lifetimePeriod) / 12);
		const startTime = moment.unix(sortedSubs[0][4]);
		const endTime = moment.unix(sortedSubs[0][4]).add(differencePerColumn, lifetimePeriod);
		const rStartTime = moment.unix(sortedSubs[0][4]);
		const rEndTime = moment.unix(sortedSubs[0][4]).add(differencePerColumn, lifetimePeriod);
		return {
			labels: [
				startTimeLabel.format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				startTimeLabel.add(differencePerColumn, lifetimePeriod).format('MMM YY'),
				moment().format('MMM YY')
			],
			datasets: [
				{
					label: 'Accepted Submissions',
					fillColor: 'rgba(0, 255, 0, 0.2)',
					strokeColor: 'rgba(0, 255, 0, 0.5)',
					pointColor: 'rgba(0, 255, 0, 0.8)',
					pointStrokColor: 'rgba(0, 255, 0, 1)',
					pointHighlightFill: 'rgba(0, 255, 0.4)',
					pointHighlightStroke: 'rgba(0, 255, 0.6)',
					data: [
						this.getSubsInPeriod(startTime, endTime, 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), endTime.add(differencePerColumn, lifetimePeriod), 90).length,
						this.getSubsInPeriod(startTime.add(differencePerColumn, lifetimePeriod), now, 90).length,
						this.getSubsInPeriod(moment().startOf('month'), moment().endOf('month'), 90).length
					]
				},
				{
					label: 'Rejected Submissions',
					fillColor: 'rgba(255, 0, 0, 0.2)',
					strokeColor: 'rgba(255, 0, 0, 0.5)',
					pointColor: 'rgba(255, 0, 0, 0.8)',
					pointStrokColor: 'rgba(255, 0, 0, 1)',
					pointHighlightFill: 'rgba(255, 0, 0.4)',
					pointHighlightStroke: 'rgba(255, 0, 0.6)',
					data : [
						this.getSubsInPeriod(rStartTime, rEndTime, 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), rEndTime.add(differencePerColumn, lifetimePeriod), 80).length,
						this.getSubsInPeriod(rStartTime.add(differencePerColumn, lifetimePeriod), now, 80).length,
						this.getSubsInPeriod(moment().startOf('month'), moment().endOf('month'), 80).length
					]
				}
			]
		}
	}
	updateDisplayAccepted(){
		this.setState({
			displayAccepted: !this.state.displayAccepted
		});
	}
	updateDisplayRejected(){
		this.setState({
			displayRejected: !this.state.displayRejected
		})
	}
	handlePeriodChange(event, index, value){
		event.preventDefault();
		this.setState({
			period: value
		});
	}
	render(){
		let chartData;
		switch(this.state.period){
			case 1:
				chartData = this.createLineDataLastYear(this.state.subs);
				break;
			case 2:
				chartData = this.createLineDataLastThreeMonths(this.state.subs);
				break;
			case 3:
				chartData = this.createLineDataLifetime(this.state.subs);
				break;
			default:
				break;
		}
		if(!this.state.displayAccepted){
			chartData.datasets[0] = [];
		}
		if(!this.state.displayRejected){
			chartData.datasets[1] = [];
		}
		return (
			<div style={{display: "flex", "justifyContent": "space-evenly" }}>
				<div>
					<LineChart data={chartData} redraw width="600" height="250"/>
				</div>
				<div style={{"alignSelf":"center", "marginLeft": "16px"}}>
					<Checkbox
						label="Show Accepted submissions"
						checked={this.state.displayAccepted}
						onCheck={this.updateDisplayAccepted.bind(this)}
						style={{marginBottom: "16px"}}
					/>
					<Checkbox
						label="Show Rejected submissions"
						checked={this.state.displayRejected}
						onCheck={this.updateDisplayRejected.bind(this)}
						style={{marginBottom: "16px"}}
					/>
					<SelectField
						floatingLabelText="Period"
						value={this.state.period}
						onChange={this.handlePeriodChange.bind(this)}
					>
						<MenuItem value={1} primaryText="Last Year"/>
						<MenuItem value={2} primaryText="Last 3 Months"/>
						<MenuItem value={3} primaryText="Lifetime"/>
					</SelectField>
				</div>
			</div>
		);
	}
}