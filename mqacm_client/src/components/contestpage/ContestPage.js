import React from 'react';
import Header from '../Header';
import LeaderBoard from './LeaderBoard';
import ProblemTab from './ProblemTab';
import Instructions from './Instructions';
import NewsBar from './NewsBar';
import {Tabs,Tab} from 'material-ui/Tabs';

let tabStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  height: '800px',
  overflow: 'scroll'
}

const ContestPage = () => (
	<div>
	    <NewsBar/>

	    <Tabs>
	    	<Tab label="Leaderboard">
	            <div style={tabStyle}>
	                <LeaderBoard />
	            </div>
	        </Tab>

	        <Tab label="Problem Set">
	            <div style={tabStyle}>
	                <ProblemTab />
	            </div>
	        </Tab>

	        <Tab label="Instructions">
	            <div style={tabStyle}>
	                <Instructions />
	            </div>
	        </Tab>
	    </Tabs>
    </div>
);

export default ContestPage;