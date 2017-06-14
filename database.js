const firebase = require('firebase');
const async = require('async');
const request = require('request');
const fs = require('fs');

const p_set_warmup = require('./data/problem_set_warmup.js');
const p_set_easy = require('./data/problem_set_easy.js');
const p_set_medium = require('./data/problem_set_medium.js');
const p_set_hard = require('./data/problem_set_hard.js');
const p_list = require('./data/participants.js');

let problemset_warmup = p_set_warmup.list;
let problemset_easy = p_set_easy.list;
let problemset_medium = p_set_medium.list;
let problemset_hard = p_set_hard.list;
let participants = p_list.list;
/*
import * as p_set_easy from './data/problem_set_easy';
import * as p_set_medium from './data/problem_set_medium';
import * as p_set_hard from './data/problem_set_hard';
import * as p_list from './data/participants.js';

*/

exports.upload_problems = () => {
  let key;
  let questions = new Set();
  for (key in problemset_warmup){
    if (questions.has(key)){
        console.error("warning: found duplicate question: " + key);
    }
    questions.add(key);
    problemset_warmup[key].link = "https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem="+problemset_warmup[key].pid;
  }
  for (key in problemset_easy){
    if (questions.has(key)){
        console.error("warning: found duplicate question: " + key);
    }
    questions.add(key);
    problemset_easy[key].link = "https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem="+problemset_easy[key].pid;
  }
  for (key in problemset_medium){
    if (questions.has(key)){
        console.error("warning: found duplicate question: " + key);
    }
    questions.add(key);
    problemset_medium[key].link = "https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem="+problemset_medium[key].pid;
  }
  for (key in problemset_hard){
    if (questions.has(key)){
        console.error("warning: found duplicate question: " + key);
    }
    questions.add(key);
    problemset_hard[key].link = "https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem="+problemset_hard[key].pid;
  }
  firebase.database().ref().update({
      problemset_warmup : problemset_warmup,
      problemset_easy : problemset_easy,
      problemset_medium : problemset_medium,
      problemset_hard : problemset_hard
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



exports.update_participants = () => {

  // go through each user in participants, making 1 async call at a time
  async.eachOfLimit(participants,1,
    function(item,id,callback){
      setTimeout( function(){
        request('http://uhunt.felix-halim.net/api/subs-user/'+id,
          function(error,response,body){
            if (error){
               console.error(error);
               return false;
             }
            let submissions = JSON.parse(body).subs;
            let solvedSet = new Set();
            let totalSolved = 0;

            // get a set of all the accepted submission of this user
            for (let i = 0; i < submissions.length; i++){
              if (submissions[i][2] === 90){
                solvedSet.add(submissions[i][1]);
              }
            }
            // for each problemset, iterate through the questions, and
            // see if user has solved it
            let tempSet = [];
            for (let key in problemset_warmup){
              if(solvedSet.has(problemset_warmup[key].pid)){
                tempSet.push(key);
                totalSolved++;
              }
            }
            participants[id].solved_warmup = tempSet;
            participants[id].t_solved_warmup = tempSet.length;

            tempSet = [];
            for (let key in problemset_easy){
              if(solvedSet.has(problemset_easy[key].pid)){
                tempSet.push(key);
                totalSolved++;
              }
            }
            participants[id].solved_easy = tempSet;
            participants[id].t_solved_easy = tempSet.length;

            tempSet = [];
            for (let key in problemset_medium){
              if(solvedSet.has(problemset_medium[key].pid)){
                tempSet.push(key);
                totalSolved++;
              }
            }
            participants[id].solved_medium = tempSet;
            participants[id].t_solved_medium = tempSet.length;

            tempSet = [];
            for (let key in problemset_hard){
              if(solvedSet.has(problemset_hard[key].pid)){
                tempSet.push(key);
                totalSolved++;
              }
            }
            participants[id].solved_hard = tempSet;
            participants[id].t_solved_hard = tempSet.length;

            participants[id].total_solved = totalSolved;
            callback();
          });
      }, 100);
    },
    function(err){
      if (err) console.error(err);
      upload_user_data();
    }
  );
};


function upload_user_data(){
  for (var key in participants){
    participants[key].id = key;
  }
  firebase.database().ref().update({
    participants : participants
  });
}

/*
    To find the pid, use uhunt.felix-halim.net/api/p/num/<num>
 */
