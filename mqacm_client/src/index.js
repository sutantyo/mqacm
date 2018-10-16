import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as firebase from 'firebase';

import {
  grey200, grey400,
  deepOrange400, deepOrange500
}from 'material-ui/styles/colors';

const acmTheme = getMuiTheme({
  palette: {
    primary1Color: grey400,
    accent1Color: deepOrange500,
    accent2Color: grey200,
    accent3Color: deepOrange400
  }
})

let config = {
	apiKey:"AIzaSyDcj5L-4niX7cB2ZMlwmaIwxUu81PI4u8I",
	authDomain:"mqacm-b63e8.firebaseapp.com",
	databaseURL:"https://mqacm-b63e8.firebaseio.com"
};
firebase.initializeApp(config);
firebase.auth().signInAnonymously().catch(function(error){
  console.log(error.code + ": " + error.message);
});

injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider muiTheme={acmTheme} >
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
registerServiceWorker();
