import React, { Component } from 'react';

import { Tasks } from '../api/tasks.js';

export default class TaskLine extends Component {
	deleteThisTask() {
		Tasks.remove(this.props.task._id);
	}

	renderState(state) {
		let stateDecorators = {
			"pending": ".",
			"completed": "x",
			"event": "o",
		}

		return stateDecorators[state];
	}

	changeState() {
		if (this.props.task.state === "pending") {
			Tasks.update(this.props.task._id, { $set: { state: "completed" } });
		}
	}

	render() {
		return (
			<li className="collection-item">
				<button className="btn right" onClick={this.deleteThisTask.bind(this)}>&times;</button>
				<button className="btn" onClick={this.changeState.bind(this)}>{this.renderState(this.props.task.state)}</button>&nbsp;
				{this.props.task.text}
			</li>
		);
	}
}