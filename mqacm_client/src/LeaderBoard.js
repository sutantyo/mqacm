import React from 'react';
import * as Spinner from 'react-spinkit';
import * as firebase from 'firebase';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


class LeaderBoard extends React.Component {
  constructor(){
    super();
    this.state = {
      ready_to_render : false,
      participants : []
    }
  }

  componentWillMount(){
    firebase.database().ref('participants').on('value', snapshot =>{
      this.setState({
          ready_to_render: true,
          //participants : testdata
          participants : snapshot.val()
      })
    })
  }

  generateRowData(data){
    let participants = [];
    for (let key in data){
      participants.push(data[key]);
    }
    participants.sort(function(a,b){
      return (b.total_solved - a.total_solved);
      //return (b.solved_easy.length + b.solved_medium.length + b.solved_hard.length) - (a.solved_easy.length + a.solved_medium.length + a.solved_hard.length);
    });
    return participants;
  }

  render(){
    if (this.state.ready_to_render){
      let participants = this.generateRowData(this.state.participants);
      return (
        <div style={{opacity:0.7}}>
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
              <TableRow>
                <TableHeaderColumn style={{width:'20px'}}>Rank</TableHeaderColumn>
                <TableHeaderColumn style={{width:'50px'}}>ID</TableHeaderColumn>
                <TableHeaderColumn style={{width:'200px'}}>Name</TableHeaderColumn>
                <TableHeaderColumn style={{textAlign:'center'}}>Score</TableHeaderColumn>
                <TableHeaderColumn style={{textAlign:'center'}}>Warm-up</TableHeaderColumn>
                <TableHeaderColumn style={{textAlign:'center'}}>Easy</TableHeaderColumn>
                <TableHeaderColumn style={{textAlign:'center'}}>Medium</TableHeaderColumn>
                <TableHeaderColumn style={{textAlign:'center'}}>Hard</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover={true}
              stripedRows={false}
              style={{height:'20px'}}
            >
            {participants.map( (participant, index) =>
                <TableRow style={{height:'20px'}} key={participant.id}>
                    <TableRowColumn style={{width:'20px',textAlign:'right'}}>{index+1}</TableRowColumn>
                    <TableRowColumn style={{width:'50px',textAlign:'left'}}>{participant.id}</TableRowColumn>
                    <TableRowColumn style={{width:'200px',textAlign:'left'}}>{participant.name}</TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}>{participant.total_solved}</TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}>{participant.t_solved_warmup}</TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}>{participant.t_solved_easy}</TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}>{participant.t_solved_medium}</TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}>{participant.t_solved_hard}</TableRowColumn>
                </TableRow>
              )
            }
            </TableBody>
          </Table>
        </div>
      );
    }
    else{
      return (
        <div style={{margin:'0 auto',width:'800px'}}>
        <Spinner name="circle" />
        </div>
      )
    }
  }
}
export default LeaderBoard;


/*
let testdata = {
    "912" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "912",
      "mqid" : "45299351",
      "name" : "casper",
      "solved_easy" : [ "1","2","3" ],
      "solved_hard" : [ "21","25" ],
      "solved_medium" : [ "37" ]
    },
    "3254" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "3254",
      "mqid" : "31574353",
      "name" : "tintin",
      "solved_easy" : [ "2" ],
      "solved_hard" : [ "24" ],
      "solved_medium" : []
      },
    "95738" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "95738",
      "mqid" : "30485289",
      "name" : "pancho",
      "solved_easy" : [],
      "solved_hard" : [],
      "solved_medium" : []
      },
    "12354" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "12354",
      "mqid" : "48593123",
      "name" : "some dude",
      "solved_easy" : [],
      "solved_hard" : [],
      "solved_medium" : []
      },
    "9784" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "9784",
      "mqid" : "48931245",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [],
      "solved_medium" : []
      },
    "878" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "878",
      "mqid" : "48931245",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [ "22" ],
      "solved_medium" : []
      },
    "6920" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "6920",
      "mqid" : "48931246",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [ "21" ],
      "solved_medium" : [ "32" ]
      },
    "5554" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "5554",
      "mqid" : "41156384",
      "name" : "some dude",
      "solved_easy" : [ "7", "9", "5" ],
      "solved_hard" : [ "27" ],
      "solved_medium" : [ "37" ]
      },
    "23580" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "23580",
      "mqid" : "41851049",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [],
      "solved_medium" : [ "35" ]
    },
    "1234" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "1234",
      "mqid" : "41851049",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [],
      "solved_medium" : [ "35" ]
    },
    "1235" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "1235",
      "mqid" : "41851049",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [],
      "solved_medium" : [ "35" ]
    },
    "1236" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "1236",
      "mqid" : "41851049",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [],
      "solved_medium" : [ "35" ]
    },
    "2345" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "2345",
      "mqid" : "41851049",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [],
      "solved_medium" : [ "35" ]
    },
    "1111" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "1111",
      "mqid" : "41851049",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [],
      "solved_medium" : [ "35" ]
    },
    "11" : {
      "email" : "user@host.com",
      "fullname" : "Dunno",
      "id" : "11",
      "mqid" : "41851049",
      "name" : "some dude",
      "solved_easy" : [ "2" ],
      "solved_hard" : [],
      "solved_medium" : [ "35" ]
    },
    "19089" : {
      "email" : "daniel.sutantyo@mq.edu.au",
      "fullname" : "Daniel Sutantyo",
      "id" : "19089",
      "mqid" : "mq20045949",
      "name" : "sutantyo",
      "solved_easy" : [ "2", "3" ],
      "solved_hard" : [ "25", "27" ],
      "solved_medium" : [ "36" ]
    }
}
*/
