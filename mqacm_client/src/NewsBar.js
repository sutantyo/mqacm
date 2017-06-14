import React, { Component } from 'react';
import * as firebase from 'firebase';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {grey700} from 'material-ui/styles/colors';

let cardStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  marginTop: '8px',
  marginBottom: '8px'
}

let titleStyle = {
  fontSize: '20px',
  color: grey700,
  opacity: 1.0
}
let textStyle = {
  color: grey700,
  opacity: 1.0
}

class NewsBar extends Component{
  constructor(){
    super();
    this.state = {
      news : {}
    };
  }

  componentWillMount(){
    firebase.database().ref('news').on('value', snapshot =>{
      this.setState({
          news : snapshot.val()
      })
    });
  }

  render(){
    return (
      <div>
        <Card
          style = {cardStyle}
        >
          <CardHeader
            actAsExpander={true}
            title="Latest News"
            titleStyle={titleStyle}
            showExpandableButton={true}
          />
        <CardText expandable={true} style={textStyle}>
          <p>
            {this.state.news}
          </p>
          </CardText>

        </Card>
      </div>
    );
  }
}

export default NewsBar;
