import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { addNumDays } from '../utils/dateHelpers';

import { Tasks } from '../api/tasks';
import LogHeader from './LogHeader';
import TaskList from './TaskList';

class DailyLog extends Component {
  constructor(props) {
    super(props);

    // Set date as state variable
    const logDate = props.date;
    this.state = {
      logDate,
    };
  }

  // Search for tasks for given date
  daysTasks() {
    // Set the beginning and ending of date, so we can search for tasks with this date
    const dayBegin = new Date(this.state.logDate.getFullYear(),
      this.state.logDate.getMonth(),
      this.state.logDate.getDate());
    const dayEnd = addNumDays(dayBegin, 1);

    // Search for tasks for state date
    return Tasks.find({ forDay: { $gte: dayBegin, $lt: dayEnd } }).fetch();
  }

  // Change date stored in component's state by the given number of numDays
  changeDate(numDays) {
    this.setState({
      logDate: addNumDays(this.state.logDate, numDays),
    });
  }

  render() {
    return (
      <div>
        <h3>Daily Log</h3>
        <LogHeader date={this.state.logDate} onChangeDate={numDays => this.changeDate(numDays)} />
        <TaskList tasks={this.daysTasks()} />
      </div>
    );
  }
}

DailyLog.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default createContainer(() => ({
  tasks: Tasks.find({}).fetch(),
}), DailyLog);
