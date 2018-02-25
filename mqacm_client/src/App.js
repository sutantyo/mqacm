import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage';
import ContestPage from './components/contestpage/ContestPage';
import Header from './components/Header';
import LoginForm from './components/accounts/LoginForm';
import {Tabs,Tab} from 'material-ui/Tabs';

let tabStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  height: '800px',
  overflow: 'scroll'
}

let appBodyStyle = {
  marginLeft: '5%',
  marginRight: '5%'
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
      <Router>
        <div className="App">
         <div className="App-body" style={appBodyStyle}>
          <div>
            <Header />
            <Tabs>
              <Tab label="Home">
                <div style={tabStyle}>
                  <Homepage />
                </div>
              </Tab>
              <Tab label="Contest Page">
                <div style={tabStyle}>
                  <ContestPage />
                </div>
              </Tab>
              <Tab label="Login/Register">
                <div style={tabStyle}>
                  <LoginForm />
                </div>
              </Tab>
            </Tabs>

            <Route exact={true} path="/" component={Homepage} />
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
