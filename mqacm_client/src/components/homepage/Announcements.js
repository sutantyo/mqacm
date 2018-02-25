import React from 'react';
import NewsBar from '../contestpage/NewsBar';

export default class Announcements extends NewsBar {
	constructor(){
		super();
		this.state = {
			news: {},
			title: "Announcements",
			initiallyExpanded: true
		};
	}
	componentWillMount(){
	    this.setState({
	        news : "Tester string"
    });
  }
}