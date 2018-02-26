import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../../styles/components/instructions';

export default class Announcements extends Component {
	constructor(){
		super();
		this.state = {
			announcements: {},
		};
	}
	componentWillMount(){
	    this.setState({
	        announcements : "Annonucement test"
    	});
  	}
  	render(){
  		return (
  			<div>
  				<Paper style={styles.paperStyle}>
          			<h2>Announcements</h2>
          			<p>
          				{this.state.announcements}
          			</p>
          		</Paper>
  			</div>
  		);
  	}
}