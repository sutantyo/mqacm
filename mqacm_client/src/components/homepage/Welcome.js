import React from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../../styles/components/instructions.js';

const Welcome = () => (
	<div>
		<Paper style={styles.paperStyle}>
			<h2>Welcome</h2>
			<p>Welcome to the Macquarie University Competitive Programming website!
			   This website is used to host ACM styles competitions, track your progress on
			   multiple problem submission sites such Uva, SPOJ and more, it's is where
			   we will make announcements regarding important informations and an overview
			   of upcoming dates for your diary.
			   In the near future we will be adding user accounts and profiles so you can view
			   other users' progress and an area for users to both submit their own questions
			   and guides for the benefit of other users.
			</p>
		</Paper>
	</div>
);

export default Welcome;