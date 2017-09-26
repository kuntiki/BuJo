import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from './NewTaskForm.jsx';

export default class LogHeader extends Component {
	handleYesterday() {
		// Send the change date to parent
		this.props.onChangeDate(-1);
	}

	handleTomorrow() {
		// Send the change date to parent
		this.props.onChangeDate(1);
	}

	render() {
		return (
			<div>
				<h4 className="valign-wrapper">
					<a className="waves-effect waves-teal btn-flat" onClick={this.handleYesterday.bind(this)}><i className="medium material-icons">chevron_left</i></a> 
					<span>{this.props.date.toDateString()}</span> 
					<a className="waves-effect waves-teal btn-flat" onClick={this.handleTomorrow.bind(this)}><i className="medium material-icons">chevron_right</i></a> 
				</h4>
				<NewTaskForm forSection="date" date={this.props.date} />
			</div>
		);
	}
} 

LogHeader.PropTypes = {
	date: PropTypes.object.isRequired,
}