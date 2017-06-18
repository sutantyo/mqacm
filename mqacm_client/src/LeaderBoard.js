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
      participants : [],
      last_update : 0,
    }
  }

  componentWillMount(){
    firebase.database().ref('participants').on('value', snapshot =>{
      this.setState({
          ready_to_render: true,
          participants : snapshot.val()
      })
    });
    firebase.database().ref('last_update').on('value', snapshot =>{
      this.setState({
          last_update : new Date(snapshot.val())
      })
    });
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
      let date_options = { weekday: 'long', year: 'numeric', month: 'long', day:'numeric', timeZoneName: 'short', hour:'numeric', minute:'numeric',second:'numeric'}
      let update_time = this.state.last_update.toLocaleString('en-AU',date_options);
    if (this.state.ready_to_render){
      let participants = this.generateRowData(this.state.participants);
      //update_time.setUTCSeconds(this.state.last_update);
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

          <div style={{padding:'30px 40px 5px 15px',fontFamily:'Roboto, sans-serif',fontSize:'12px'}}> Last updated: {update_time}</div>
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
