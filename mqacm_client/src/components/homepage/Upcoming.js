import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../../styles/components/instructions';

export default class Upcoming extends Component {
	constructor(){
		super();
		this.state = {
			upcoming: {},
		};
	}
	componentWillMount(){
	    this.setState({
	        upcoming: "Upcoming dates"
    	});
	}
	render(){
		return (
			<div>
				<Paper style={styles.paperStyle}>
					<h2>Upcoming Events</h2>
					<p>
						{this.state.upcoming}
					</p>
				</Paper>
			</div>
		);
	}
}