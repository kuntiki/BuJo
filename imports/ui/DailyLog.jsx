import React, { Component } from 'react';

import LogHeader from './LogHeader.jsx';
import TaskList from './TaskList.jsx';

export default class DailyLog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logDate: props.date,
		}
	}



	render() {
		return (
			<div>
				<h2>Daily Log</h2>
				<LogHeader date={this.state.logDate} />
				<TaskList />
			</div>
		);
	}
}