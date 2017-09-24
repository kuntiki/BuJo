import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NewTaskForm extends Component {
	insertTask(event) {
		// Do not reload page
		event.preventDefault();
		// Get task
		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
		// Insert task
		if (text != '') {
			Meteor.call('addTaskForDay', text, () => {
				// Clean form
				ReactDOM.findDOMNode(this.refs.textInput).value = '';			
			});
		}
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