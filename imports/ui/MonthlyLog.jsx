import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { addNumMonths } from '../utils/dateHelpers';

import { Tasks } from '../api/tasks';
import LogHeader from './LogHeader';
import TaskList from './TaskList';

class MonthlyLog extends Component {
  constructor(props) {
    super(props);

    // Set date as state variable
    const logDate = props.date;
    this.state = {
      logDate,
    };
  }

  // Search for tasks for given date
  monthsTasks() {
    // Set the beginning and ending of date, so we can search for tasks with this date
    const dayBegin = new Date(this.state.logDate.getFullYear(),
      this.state.logDate.getMonth(),
      1);
    const dayEnd = addNumMonths(dayBegin, 1);

    // Search for tasks for state date
    return Tasks.find({ forDay: { $gte: dayBegin, $lt: dayEnd } }).fetch();
  }

  // Change date stored in component's state by the given number of numMonths
  changeDate(numMonths) {
    this.setState({
      logDate: addNumMonths(this.state.logDate, numMonths),
    });
  }

  render() {
    return (
      <div>
        <h3>Monthly Log</h3>
        <LogHeader
          date={this.state.logDate}
          onChangeDate={numMonths => this.changeDate(numMonths)}
        />
        <TaskList tasks={this.monthsTasks()} />
      </div>
    );
  }
}

MonthlyLog.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default createContainer(() => ({
  tasks: Tasks.find({}).fetch(),
}), MonthlyLog);
