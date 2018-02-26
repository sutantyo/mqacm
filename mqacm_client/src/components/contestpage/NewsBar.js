import React, { Component } from 'react';
import * as firebase from 'firebase';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import * as styles from '../../styles/components/newsbar';

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
          style = {styles.cardStyle}
        >
          <CardHeader
            actAsExpander={true}
            title={"Contest News"}
            titleStyle={styles.titleStyle}
            showExpandableButton={true}
          />
        <CardText expandable={true} style={styles.textStyle}>
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