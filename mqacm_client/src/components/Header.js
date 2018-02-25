import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {grey700} from 'material-ui/styles/colors';

let headerStyle={
  //fontFamily: '"Gill Sans","Gill Sans MT",Calibri,sans-serif',
  fontFamily: 'Roboto, sans-serif',
  //fontFamily: '"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Verdana,sans-serif',
  fontSize: '20px',
  color: grey700
}

const Header = (props) => (
	<Toolbar>
	    <ToolbarGroup style={headerStyle}>
	        <ToolbarTitle style={headerStyle} text="Macquarie University Competitive Programming"/>
	    </ToolbarGroup>
	    <ToolbarGroup>
	        <img src="mq_horizontal.png?" alt="Macquarie University" style={{width:'200px'}}/>
	    </ToolbarGroup>
	</Toolbar>
);

export default Header;