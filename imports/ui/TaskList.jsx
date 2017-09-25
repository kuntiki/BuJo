import React, { Component } from 'react';

import TaskLine from './TaskLine.jsx'

export default class TaskList extends Component {
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

