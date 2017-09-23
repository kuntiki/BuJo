import React, { Component } from 'react';

import LogHeader from './LogHeader.jsx';
import TaskList from './TaskList.jsx';

export default class DailyLog extends Component {
	render() {
		return (
			<div>
				<h2>Daily Log</h2>
				<LogHeader date={(new Date())} />
				<TaskList />
			</div>
		);
	}
}