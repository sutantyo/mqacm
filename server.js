const express = require('express');
const path = require('path');
const firebase = require('firebase');
const database = require('./database.js');
const schedule = require('node-schedule');
const google = require('googleapis');

// start the app
const app = express();

/*
function f1(n, callback){
  if (n === 0)
    return;
  setTimeout(function(){
    console.log(n);
  },1000);
  callback(n-1,f1);
}

f1(10,f1);
*/

firebase.initializeApp({
  apiKey:"AIzaSyDcj5L-4niX7cB2ZMlwmaIwxUu81PI4u8I",
  authDomain:"mqacm-b63e8.firebaseapp.com",
  databaseURL:"https://mqacm-b63e8.firebaseio.com"
});

let authClient = new google.auth.JWT(
  process.env.GAPI_CLIENT_EMAIL,
  null,
  process.env.GAPI_CLIENT_PRIVATE_KEY.replace(/\\n/g,'\n'),
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

schedule.scheduleJob('30 * * * *', function(){
    database.initialise_database(function(){
      firebase.database().ref().update({
        last_update : Date.now()
      });
    });
});
