const express = require('express');
const path = require('path');
const firebase = require('firebase');
const database = require('./database.js');

const app = express();

var cred = firebase.auth.EmailAuthProvider.credential(
    process.env.FIREBASE_ADMIN_IDENTIFIER,
    process.env.FIREBASE_ADMIN_PASSWORD
);
firebase.initializeApp({
	apiKey:"AIzaSyDcj5L-4niX7cB2ZMlwmaIwxUu81PI4u8I",
	authDomain:"mqacm-b63e8.firebaseapp.com",
	databaseURL:"https://mqacm-b63e8.firebaseio.com"
});
firebase.auth().signInWithEmailAndPassword(process.env.FIREBASE_ADMIN_IDENTIFIER, process.env.FIREBASE_ADMIN_PASSWORD).catch(function(error) {
	if (error)
		console.log(error.code + ": " + error.message);
});

database.upload_problems();
database.update_participants();
/*
REACT_APP_API_KEY="AIzaSyDcj5L-4niX7cB2ZMlwmaIwxUu81PI4u8I",
REACT_APP_AUTH_DOMAIN="mqacm-b63e8.firebaseapp.com"
REACT_APP_DATABASE_URL="https://mqacm-b63e8.firebaseio.com"
REACT_APP_PROJECT_ID="mqacm-b63e8"
REACT_APP_STORAGE_BUCKET="mqacm-b63e8.appspot.com"
REACT_APP_MESSAGING_SENDER_ID="584742076824"
*/

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'mqacm_client/build')));


// Put all API endpoints under '/api'
/*
app.get('/api', (req, res) => {
	console.log("calling api");
});
*/

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/mqacm_client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);
