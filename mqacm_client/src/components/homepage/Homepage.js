import React from 'react';

import Announcements from './Announcements';
import Header from '../Header';
import Upcoming from './Upcoming';
import Welcome from './Welcome';

const Homepage = () => (
	<div>
		<Welcome />
		<Announcements />
		<Upcoming />
	</div>
);

export default Homepage;