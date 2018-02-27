import React, { Component } from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SubGraphs from './SubGraphs';
import * as styles from '../../styles/components/problemtab';
import { orange500, greenA700, red500 } from 'material-ui/styles/colors';

export default class ProfilePage extends Component{
	constructor(){
		super();
		this.state = {
			box_warning: "Press Enter to check progress",
      		box_color: orange500,
      		data: false,
      		response: {}
		}
	}

	fetchUvaData(event){
		if (event.charCode === 13){
      		event.preventDefault();
      		let id = parseInt(event.target.value,10);
      		if (id > 0){
          		axios.get('https://uhunt.onlinejudge.org/api/subs-user/'+id).then((response) => {
          			if(response.data.name === ''){
          				throw new Error();
          			}
          			this.setState({
			            box_warning: "Retrieved data for " + id,
			            box_color: greenA700,
			            data: true,
			            response: response
			        });
          		}).catch((error) => {
          			this.setState({
			            box_warning: "User is not registered",
			            box_color: red500
			        });
          		});
      		}
      		event.target.value = '';
      	}
	}

	render(){
		return (
			<div>
				<Paper style={styles.paperStyle}>
					<form onSubmit={this.fetchUvaData}>
						<h2>Enter your Uva ID to track your progress</h2>
						<TextField 
							hintText="Enter your UVA ID here"
                  			errorText={this.state.box_warning}
                  			errorStyle={{color:this.state.box_color}}
                  			onKeyPress={this.fetchUvaData.bind(this)}
                  			style={styles.inputBoxStyle}
                  		/>
					</form>
					{this.state.data && <SubGraphs data={this.state.response}/>}
				</Paper>
			</div>
		);
	}
}