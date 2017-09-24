import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from './NewTaskForm.jsx';

export default class LogHeader extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.date.toDateString()}</h3>
				<NewTaskForm />
			</div>
		);
	}
} 

LogHeader.PropTypes = {
	date: PropTypes.object.isRequired,
}