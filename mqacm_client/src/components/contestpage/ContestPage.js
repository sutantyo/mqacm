import React from 'react';
import Header from '../Header';
import LeaderBoard from './LeaderBoard';
import ProblemTab from './ProblemTab';
import Instructions from './Instructions';
import NewsBar from './NewsBar';
import {Tabs,Tab} from 'material-ui/Tabs';
import * as styles from '../../styles/components/contestpage';

const ContestPage = () => (
	<div>
	    <NewsBar/>

	    <Tabs>
	    	<Tab label="Leaderboard">
	            <div style={styles.tabStyle}>
	                <LeaderBoard />
	            </div>
	        </Tab>

	        <Tab label="Problem Set">
	            <div style={styles.tabStyle}>
	                <ProblemTab />
	            </div>
	        </Tab>

	        <Tab label="Instructions">
	            <div style={styles.tabStyle}>
	                <Instructions />
	            </div>
	        </Tab>
	    </Tabs>
    </div>
);

export default ContestPage;