import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';

export default class NewTaskForm extends Component {
	insertTask(event) {
		// Do not reload page
		event.preventDefault();
		// Get task
		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
		// Insert task
		Tasks.insert({
			text,
			state: "pending",
			createdAt: new Date(),
			daily: true,
			forDay: new Date(),
		});
		// Clean form
		ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}

	render() {
		return (
			<form onSubmit={this.insertTask.bind(this)}>
				<input 
					type="text"
					ref="textInput"
					placeholder="Type to add new task"
				/>
			</form>
		);
	}
}