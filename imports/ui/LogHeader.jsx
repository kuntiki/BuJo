import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from './NewTaskForm';

export default class LogHeader extends Component {
  constructor() {
    super();
    // Binding local functions so that we don't have to do it in render()
    this.handleYesterday = this.handleYesterday.bind(this);
    this.handleTomorrow = this.handleTomorrow.bind(this);
  }

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
          <a
            href="#!"
            className="waves-effect waves-teal btn-flat"
            role="button"
            onClick={this.handleYesterday}
          >
            <i className="medium material-icons">chevron_left</i>
          </a>
          <span>{this.props.date.toDateString()}</span>
          <a
            href="#!"
            className="waves-effect waves-teal btn-flat"
            role="button"
            onClick={this.handleTomorrow}
          >
            <i className="medium material-icons">chevron_right</i>
          </a>
        </h4>
        <NewTaskForm forSection="date" date={this.props.date} />
      </div>
    );
  }
}

LogHeader.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChangeDate: PropTypes.func.isRequired,
};
