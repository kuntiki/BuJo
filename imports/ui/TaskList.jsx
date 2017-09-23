import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
import TaskLine from './TaskLine.jsx'

class TaskList extends Component {
	renderTaskLines() {
		let tasks = this.props.tasks;

		return tasks.map( (task) => {
			return (
				<TaskLine
					key={task._id}
					task={task}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<ul className="collection">
					{this.renderTaskLines()}
				</ul>
			</div>
		);
	}
}

export default createContainer(() => {
	return {
		tasks: Tasks.find({}).fetch(),
	};
}, TaskList );