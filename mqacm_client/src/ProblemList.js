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


let cardStyle = {
  opacity: 0.7,
  borderRadius: '4px',
  marginLeft: '2%',
  marginRight: '2%'
}

class ProblemList extends React.Component {
  constructor(){
    super();
    this.state = {
      ready_to_render : false,
      problemset : []
    }
  }

  componentWillMount(){
    firebase.database().ref(this.props.set).once('value', snapshot =>{
      this.setState({
          ready_to_render: true,
          problemset : snapshot.val()
          //problemset : testdata
      })
    })
  }

  generateRowData(data){
    let problems = [];
    for (let key in data){
      problems.push(data[key]);
    }
    problems.sort(function(a,b){
      return (a.level - b.level);
    });
    return problems;
  }


  render(){
    if (this.state.ready_to_render){
      let problems = this.generateRowData(this.state.problemset);
      return (
        <div>
          <Card style = {cardStyle}>
          <CardHeader
              actAsExpander={true}
              title={this.props.title + "   " + "(" + problems.length + " problems)"}
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
                  <TableHeaderColumn style={{width:'320px'}}>Title</TableHeaderColumn>
                  <TableHeaderColumn style={{width:'100px'}}>Level</TableHeaderColumn>
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
                      <TableRowColumn style={{width:'40px'}}>{problem.num}</TableRowColumn>
                      <TableRowColumn style={{width:'320px'}} ><a href={"https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem="+problem.pid} target={'_blank'}>
                      {problem.title}</a></TableRowColumn>
                      <TableRowColumn style={{width:'100px'}}>{problem.level}</TableRowColumn>
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
