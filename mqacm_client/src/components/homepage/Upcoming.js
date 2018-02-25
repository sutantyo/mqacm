import React from 'react';
import Newsbar from '../contestpage/NewsBar';

export default class Upcoming extends Newsbar {
	constructor(){
		super();
		this.state = {
			news: {},
			title: "Upcoming Events",
			initiallyExpanded: true
		};
	}
	componentWillMount(){
	    this.setState({
	        news: "Upcoming dates"
    	});
	}
}