import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import ProblemList from './ProblemList';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase';
import {orange500,grey600,greenA700,red500} from 'material-ui/styles/colors';


let paperStyle = {
  fontSize: '14px',
  backgroundColor: 'rgba(255,255,255,0.7)',
  padding: '20px 15px 10px 15px',
  marginBottom: '8px',
  color: grey600
}

let inputBoxStyle = {
  paddingLeft: '18px',
  marginRight: '22px',
  width: '180px',
  fontSize: '14px'
}


class ProblemTab extends Component{
  constructor(){
    super();
    this.state = {
      box_warning: "Press Enter to check progress",
      box_color: orange500,
      solved_warmup : null,
      solved_easy : null,
      solved_medium : null,
      solved_hard : null
    };
  }

  checkRanking(event){
    if (event.charCode === 13){
      event.preventDefault();
      let id = parseInt(event.target.value,10);
      if (id > 0){
        firebase.database().ref('participants').child(id).on('value', snapshot =>{
          if (snapshot.val() != null){
            this.setState({
              box_warning: "Retrieved data for " + id,
              box_color: greenA700,
              solved_warmup : snapshot.val().solved_warmup,
              solved_easy : snapshot.val().solved_easy,
              solved_medium : snapshot.val().solved_medium,
              solved_hard : snapshot.val().solved_hard
            })
          }
          else {
            this.setState({
              box_warning: "User is not registered",
              box_color: red500
            })
          }
        });
      }
    }
  }

  render(){
    return (
        <div>
              <Paper style={paperStyle}>
                <div style={{marginLeft:'20px'}}>
                <p>
                  <b>
                  If you are new to the competition, please start by reading the
                  instructions tab.</b>
                </p>

                <p>
                  Here is the list of questions that we are using for this year's
                  competition.
                  The questions are grouped according to their level of difficulty:
                  warm-up, easy, medium, and hard.
                  Expect to spend about 15 minutes to an hour for warm-up and easy
                  questions, whereas some medium and hard problems can potentially take
                  hours.
                </p>
                <p>
                  Each question also has a level, either 115, 125, or 225, and you can
                  think of them as the prerequisite for the question.
                  For example, a question marked with 115 is intended for students who have done
                  COMP115,
                  whereas a question marked with 125 may assume a few things that
                  are taught in COMP125, e.g. using Java libraries such as Stack or
                  ArrayList.
                  These are only guidelines, and in some cases the question might end up
                  being easier or harder that we expected, so apologies in advance!
                  Do let us know if you think the guideline is off.
                </p>
                <p>
                  You can enter your UVA id in the text box to see which questions you (or someone else)
                  have done.
                </p>
                </div>
                <TextField hintText="Enter your UVA ID here"
                  errorText={this.state.box_warning}
                  errorStyle={{color:this.state.box_color}}
                  onKeyPress={this.checkRanking.bind(this)}
                  style={inputBoxStyle}/>
              </Paper>
              <Paper style={paperStyle}>
                <p style={{marginLeft:'20px'}}>
                  Warm-up problems are simple and straightforward problems to
                  get you started in solving ACM problems.
                  Use these questions to get used to the process of writing,
                  debugging, and submitting your code.
                  Most, if not all, of these questions should be doable
                  even if you are still doing COMP115.
                </p>
                <ProblemList solved={this.state.solved_warmup}
                  title="Warm-up Problems"
                  set="problemset_warmup">
                </ProblemList>
              </Paper>
              <Paper style={paperStyle}>
                <p style={{marginLeft:'20px'}}>
                  These are straightforward problems which are solvable
                  using basic problem-solving approach and high-school
                  mathematics.
                  They may be a bit tricky and
                  require you to read the
                  problem description carefully.
                  Be mindful of corner cases!
                </p>
                <ProblemList solved={this.state.solved_easy}
                  title="Easy Problems"
                  set="problemset_easy">
                </ProblemList>
              </Paper>
              <Paper style={paperStyle}>
                <p style={{marginLeft:'20px'}}>
                  These problems may require knowledge of some basic
                  computer science algorithms, such as graph algorithms
                  or discrete mathematics.
                </p>
                <ProblemList solved={this.state.solved_medium}
                  title="Medium Problems"
                  set="problemset_medium">
                </ProblemList>
              </Paper>
              <Paper style={paperStyle}>
                <p style={{marginLeft:'20px'}}>
                  These are the hardest problem. You may need to implement
                  dynamic programming to avoid exceeding the time limit
                  constraint.
                </p>
                <ProblemList solved={this.state.solved_hard}
                  title="Hard Problems"
                  set="problemset_hard">
                </ProblemList>
              </Paper>
            </div>
    )
  }
}

export default ProblemTab;
