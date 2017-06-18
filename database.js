const firebase = require('firebase');
const async = require('async');
const request = require('request');
const fs = require('fs');
const readline = require('readline');
const google = require('googleapis');


let warmup_ids = new Set();
let easy_ids = new Set();
let medium_ids = new Set();
let hard_ids = new Set();
let participant_ids = new Set();


exports.initialise_database = (authClient,callback) => {

  // Authentication for Google API
  download_spreadsheet(authClient,callback);
};

function download_spreadsheet(authClient,callback){
    var sheets = google.sheets('v4');
    sheets.spreadsheets.values.batchGet({
      auth: authClient,
      spreadsheetId: '1MVYTf7vb9Qwg7qKsOQtlkps2HcnYwc3I_gykvFUKv5g',
      ranges: ['Problems!A:H','Participants!A:F']
    }, function(err,response){
        if(err){
          console.log('error: ' + err);
          return;
        }
        else {
          process_and_upload_data(response.valueRanges[0].values,response.valueRanges[1].values,callback);
        }
    });
}

function process_and_upload_data(problemSet,participants,callback){

    var json_participants = {};
    participant_ids = new Set();
    for (let i = 1; i < participants.length; i++){
      var participant_data = {};
      for (let j = 0; j < participants[0].length; j++){
        if (participants[i][j] == null){
          participant_data[participants[0][j]] = null;
        }
        else{
          participant_data[participants[0][j]] = participants[i][j];
        }
      }
      json_participants[participant_data.id] = participant_data;
      participant_ids.add(parseInt(participant_data.id));
    }

    var json_warmup = {};
    var json_easy = {};
    var json_medium = {};
    var json_hard = {};
    warmup_ids = new Set();
    easy_ids = new Set();
    medium_ids = new Set();
    hard_ids = new Set();


    for (let i = 1; i < problemSet.length; i++){
      var problem_data = {};
      for (let j = 0; j < problemSet[0].length; j++){
        if (problemSet[i][j] == null){
          problem_data[problemSet[0][j]] = null;
        }
        else{
          problem_data[problemSet[0][j]] = problemSet[i][j];
        }
      }
      problem_data.link = "https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem="+problem_data.pid;
      switch(problem_data.set){
        case "warmup" : json_warmup[problem_data.num] = problem_data;
                        warmup_ids.add(parseInt(problem_data.num));
                        break;
        case "easy"   : json_easy[problem_data.num] = problem_data;
                        easy_ids.add(parseInt(problem_data.num));
                        break;
        case "medium" : json_medium[problem_data.num] = problem_data;
                        medium_ids.add(parseInt(problem_data.num));
                        break;
        case "hard"   : json_hard[problem_data.num] = problem_data;
                        hard_ids.add(parseInt(problem_data.num));
                        break;
      }
    }

    firebase.database().ref().update({
        problemset_warmup : json_warmup,
        problemset_easy : json_easy,
        problemset_medium : json_medium,
        problemset_hard : json_hard
    });
    update_participants(json_participants,callback);
}

function update_participants(json_participants, callback){

  var request_participants = JSON.stringify(Array.from(participant_ids));
  request_participants = request_participants.substring(1,request_participants.length-1);

  async.series([
    function(callback){
        var request_ids = JSON.stringify(Array.from(warmup_ids));
        request_ids = request_ids.substring(1,request_ids.length-1);
        request('http://uhunt.felix-halim.net/api/subs-nums/'+request_participants+'/'+request_ids+'/0',
            function(error,response,body){
              if (error){
                console.error(error);
                return false;
              }
              let data = JSON.parse(body);
              for (var user in data){
                let solved = new Set();
                for (var k = 0; k < data[user].subs.length; k++){
                  if (data[user].subs[k][2] == 90)
                    solved.add(data[user].subs[k][1]);
                }
                json_participants[user].solved_warmup = Array.from(solved);
                json_participants[user].t_solved_warmup = solved.size;
                json_participants[user].total_solved = solved.size;
              }
              callback(null,'one');
        });
    },
    function(callback){
      var request_ids = JSON.stringify(Array.from(easy_ids));
      request_ids = request_ids.substring(1,request_ids.length-1);
      request('http://uhunt.felix-halim.net/api/subs-nums/'+request_participants+'/'+request_ids+'/0',
          function(error,response,body){
            if (error){
              console.error(error);
              return false;
            }
            let data = JSON.parse(body);
            for (var user in data){
              let solved = new Set();
              for (var k = 0; k < data[user].subs.length; k++){
                if (data[user].subs[k][2] == 90)
                  solved.add(data[user].subs[k][1]);
              }
              json_participants[user].solved_easy = Array.from(solved);
              json_participants[user].t_solved_easy = solved.size;
              json_participants[user].total_solved += solved.size;
            }
            callback(null,'two');
      });
    },
    function(callback){
      var request_ids = JSON.stringify(Array.from(medium_ids));
      request_ids = request_ids.substring(1,request_ids.length-1);
      request('http://uhunt.felix-halim.net/api/subs-nums/'+request_participants+'/'+request_ids+'/0',
          function(error,response,body){
            if (error){
              console.error(error);
              return false;
            }
            let data = JSON.parse(body);
            for (var user in data){
              let solved = new Set();
              for (var k = 0; k < data[user].subs.length; k++){
                if (data[user].subs[k][2] == 90)
                  solved.add(data[user].subs[k][1]);
              }
              json_participants[user].solved_medium = Array.from(solved);
              json_participants[user].t_solved_medium = solved.size;
              json_participants[user].total_solved += solved.size;
            }
            callback(null,'three');
      });
    },
    function(callback){
      var request_ids = JSON.stringify(Array.from(hard_ids));
      request_ids = request_ids.substring(1,request_ids.length-1);
      request('http://uhunt.felix-halim.net/api/subs-nums/'+request_participants+'/'+request_ids+'/0',
          function(error,response,body){
            if (error){
              console.error(error);
              return false;
            }
            let data = JSON.parse(body);
            for (var user in data){
              let solved = new Set();
              for (var k = 0; k < data[user].subs.length; k++){
                if (data[user].subs[k][2] == 90)
                  solved.add(data[user].subs[k][1]);
              }
              json_participants[user].solved_hard = Array.from(solved);
              json_participants[user].t_solved_hard = solved.size;
              json_participants[user].total_solved += solved.size;
            }
            callback(null,'four');
      });
    }
  ], function(err, results){
    if (err) console.error(err);
    upload_participants(json_participants,callback);
  });
}

  // http://uhunt.felix-halim.net/api/subs-user/19089
  //Submission ID
  //Problem ID
  //Verdict ID
  //Runtime
  //Submission Time (unix timestamp)
  //Language ID (1=ANSI C, 2=Java, 3=C++, 4=Pascal, 5=C++11)
  //Submission Rank



function upload_participants(json_participants,callback){
  firebase.database().ref().update({
    participants : json_participants
  });
  callback();
}

/*
    To find the pid, use uhunt.felix-halim.net/api/p/num/<num>
 */
