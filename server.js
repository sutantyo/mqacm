const express = require('express');
const path = require('path');
const firebase = require('firebase');
const database = require('./database.js');
const schedule = require('node-schedule');
const google = require('googleapis');

// start the app
const app = express();

var b64string = process.env.GAPI_CLIENT_PRIVATE_KEY;
var key = new Buffer(b64string, 'base64').toString("ascii").replace(/\\n/g,'\n');

firebase.initializeApp({
  apiKey:"AIzaSyDcj5L-4niX7cB2ZMlwmaIwxUu81PI4u8I",
  authDomain:"mqacm-b63e8.firebaseapp.com",
  databaseURL:"https://mqacm-b63e8.firebaseio.com"
});

let authClient = new google.auth.JWT(
  process.env.GAPI_CLIENT_EMAIL,
  null,
  key.replace(/\\n/g,'\n'),
  ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  null
);

firebase.auth().signInWithEmailAndPassword(process.env.FIREBASE_ADMIN_IDENTIFIER, process.env.FIREBASE_ADMIN_PASSWORD)
.catch(function(error) {
  if (error)
    console.log(error.code + ": " + error.message);
  }).then(
    // Serve static files from the React app
    function(){
      database.initialise_database(authClient,function(){
        firebase.database().ref().update({
          last_update : Date.now()
        });
        app.use(express.static(path.join(__dirname, 'mqacm_client/build')));
        // The "catchall" handler: for any request that doesn't
        // match one above, send back React's index.html file.
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname+'/mqacm_client/build/index.html'));
        });

        const port = process.env.PORT || 5000;
        console.log("Listening on PORT " + port);
        app.listen(port);
      });
  });

schedule.scheduleJob('*/30 * * * *', function(){
    var authClient2 = new google.auth.JWT(
      process.env.GAPI_CLIENT_EMAIL,
      null,
      key.replace(/\\n/g,'\n'),
      ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      null
    );
    database.initialise_database(authClient2,function(){
      firebase.database().ref().update({
        last_update : Date.now()
      });
    });
});
