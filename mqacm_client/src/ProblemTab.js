import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import ProblemList from './ProblemList';
import {grey600} from 'material-ui/styles/colors';


let paperStyle = {
  fontSize: '14px',
  backgroundColor: 'rgba(255,255,255,0.0)',
  padding: '20px 15px 10px 15px',
  color: grey600
}

class ProblemTab extends Component{
  render(){
    return (
        <div>
              <Paper style={paperStyle}>
                <div style={{marginLeft:'20px'}}>
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
                  Each question also has a level, either 115, 125, or 225.
                  A question marked with 115 should be doable if you have done COMP115,
                  whereas a question marked with 125 may assume a few things that
                  are taught in COMP125, e.g. using Java libraries.
                </p>
                </div>
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
                <ProblemList
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
                  problem description carefully or
                  be mindful of corner cases.
                </p>
                <ProblemList
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
                <ProblemList
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
                <ProblemList
                  title="Hard Problems"
                  set="problemset_hard">
                </ProblemList>
              </Paper>
            </div>
    )
  }
}

export default ProblemTab;
