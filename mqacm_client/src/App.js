import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage';
import ContestPage from './components/contestpage/ContestPage';
import Header from './components/Header';
import {Tabs,Tab} from 'material-ui/Tabs';
import * as styles from './styles/app';

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
      <Router>
        <div className="App">
         <div className="App-body" style={styles.appBodyStyle}>
          <div>
            <Header />
            <Tabs>
              <Tab label="Home">
                <div style={styles.tabStyle}>
                  <Homepage />
                </div>
              </Tab>
              <Tab label="Contest Page">
                <div style={styles.tabStyle}>
                  <ContestPage />
                </div>
              </Tab>
            </Tabs>
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
