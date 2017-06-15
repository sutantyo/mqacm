import React, { Component } from 'react';
import './App.css';
import LeaderBoard from './LeaderBoard';
import ProblemTab from './ProblemTab';
import Instructions from './Instructions';
import NewsBar from './NewsBar';
import {Tabs,Tab} from 'material-ui/Tabs';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {grey700} from 'material-ui/styles/colors';

let headerStyle={
  //fontFamily: '"Gill Sans","Gill Sans MT",Calibri,sans-serif',
  //fontFamily: 'Roboto, sans-serif',
  fontFamily: '"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Verdana,sans-serif',
  fontSize: '20px',
  color: grey700
}

let appBodyStyle = {
  marginLeft: '5%',
  marginRight: '5%'
}

let tabStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  height: '800px',
  overflow: 'scroll'
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      speed: 10
    }
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
       <div className="App-body" style={appBodyStyle}>
        <Toolbar>
          <ToolbarGroup style={headerStyle}>
            <ToolbarTitle style={headerStyle} text="Macquarie University Programming Contest Page"/>
          </ToolbarGroup>
          <ToolbarGroup>
            <img src="mq_horizontal.png?" alt="Macquarie University" style={{width:'200px'}}/>
          </ToolbarGroup>
        </Toolbar>

        <NewsBar/>

        <Tabs>

          <Tab label="Leaderboard">
            <div style={tabStyle}>
              <LeaderBoard />
            </div>
          </Tab>

          <Tab label="Problem Set">
            <div style={tabStyle}>
              <ProblemTab />
            </div>
          </Tab>

          <Tab label="Instructions">
            <div style={tabStyle}>
              <Instructions />
            </div>
          </Tab>
        </Tabs>

      </div>
      </div>
    );
  }
}

export default App;
