import React from 'react';
import * as Spinner from 'react-spinkit';
import * as firebase from 'firebase';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import {greenA700} from 'material-ui/styles/colors';
import * as styles from '../../styles/components/problemlist';

class ProblemList extends React.Component {
  constructor(){
    super();
    this.state = {
      ready_to_render : false,
      participant : null,
      problemset : []
    }
  }

  componentWillMount(){
    firebase.database().ref(this.props.set).on('value', snapshot =>{
      this.setState({
          ready_to_render: true,
          problemset : snapshot.val()
          //problemset : testdata
      })
    })
  }

  tickbox(solved){
    if (solved === true){
      return <FontIcon className="material-icons" style={{fontSize:'18px',color:greenA700}}>done</FontIcon>
    }
    else {
      return <div></div>
    }
  }

  generateRowData(data,solved){
    let problems = [];
    let solved_set = new Set(solved);

    for (let key in data){
      if (solved_set.has(parseInt(data[key].pid,10))){
        data[key].solved = true;
      }
      else{
        data[key].solved = false;
      }
      problems.push(data[key]);
    }

    problems.sort(function(a,b){
      return (a.level - b.level);
    });
    return problems;
  }


  render(){
    if (this.state.ready_to_render){
      let problems = this.generateRowData(this.state.problemset, this.props.solved);
      let cardTitle = this.props.title + " (" + problems.length + " problems)";
      return (
        <div>
          <Card style = {styles.cardStyle}>
          <CardHeader
              actAsExpander={true}
              title = {cardTitle}
              showExpandableButton={true}
          />
          <CardMedia expandable={true}>
            <Table
              height={this.state.height}
              fixedHeader={true}
              fixedFooter={true}
              selectable={false}
              multiSelectable={false}
              >
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
                showCheckboxes={false}
                displayRowCheckbox={false}
              >
                <TableRow style={{height:'28px'}}>
                  <TableHeaderColumn style={{width:'40px'}}>ID</TableHeaderColumn>
                  <TableHeaderColumn style={{width:'240px'}}>Title</TableHeaderColumn>
                  <TableHeaderColumn style={{width:'20px'}}></TableHeaderColumn>
                  <TableHeaderColumn style={{width:'400px'}}>Level</TableHeaderColumn>
                  <TableHeaderColumn>Comment</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
                showRowHover={true}
                stripedRows={true}
              >
              {problems.map( problem =>
                  <TableRow key={problem.num} style={{height:'20px'}}>
                      <TableRowColumn style={{width:'40px',textAlign:'right'}}>{problem.num}</TableRowColumn>
                      <TableRowColumn style={{width:'240px'}} >
                        <a href={"https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem="+problem.pid} target={'_blank'}>
                        {problem.title}</a>
                      </TableRowColumn>
                      <TableRowColumn style={{width:'20px',textAlign:'center'}}>
                        {this.tickbox(problem.solved)}
                      </TableRowColumn>
                      <TableRowColumn style={{width:'400px'}}>{problem.level}</TableRowColumn>
                      <TableRowColumn style={{whiteSpace:'normal',wordWrap:'break-word'}}>{problem.comment}</TableRowColumn>
                  </TableRow>
                )
              }
              </TableBody>
            </Table>
          </CardMedia>
          </Card>
        </div>
      );
    }
    else{
      return (
        <div>
        <Spinner name="circle" />
        </div>
      )
    }
  }
}

export default ProblemList;

/*
let testdata = {
    "1" : {
      "comment" : "Please insert comment here",
      "level" : 1,
      "num" : 1,
      "pid" : 1,
      "title" : "Problem description"
    },
    "2" : {
      "comment" : "Please insert comment here",
      "level" : 1,
      "num" : 2,
      "pid" : 2,
      "title" : "Problem description"
    },
    "3" : {
      "comment" : "Please insert comment here",
      "level" : 1,
      "num" : 3,
      "pid" : 3,
      "title" : "Problem description"
    },
    "4" : {
      "comment" : "Please insert comment here",
      "level" : 1,
      "num" : 4,
      "pid" : 4,
      "title" : "Problem description"
    },
    "11" : {
      "comment" : "Please insert comment here",
      "level" : 2,
      "num" : 11,
      "pid" : 11,
      "title" : "Problem description"
    },
    "12" : {
      "comment" : "Please insert comment here",
      "level" : 2,
      "num" : 12,
      "pid" : 12,
      "title" : "Problem description"
    },
    "22" : {
      "comment" : "Please insert comment here",
      "level" : 1,
      "num" : 22,
      "pid" : 22,
      "title" : "Problem description"
    }
}
*/
