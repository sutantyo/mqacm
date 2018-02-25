import React from 'react';
import Header from '../Header';
import Announcements from './Announcements';
import Upcoming from './Upcoming';

const Homepage = () => (
	<div>
		<Announcements />
		<Upcoming />
	</div>
);

export default Homepage;