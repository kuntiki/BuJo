import React, { Component, PropTypes } from 'react';

import NewTaskForm from './NewTaskForm.jsx';

export default class LogHeader extends Component {
	render() {
		return (
			<div>
				<h3>Log Header {this.props.date.toString()}</h3>
				<NewTaskForm />
			</div>
		);
	}
} 

LogHeader.PropTypes = {
	date: PropTypes.object.isRequired,
}