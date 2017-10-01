import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskLine extends Component {
  constructor() {
    super();
    this.deleteThisTask = this.deleteThisTask.bind(this);
    this.changeTaskState = this.changeTaskState.bind(this);
  }

  deleteThisTask() {
    Meteor.call('deleteTask', this.props.task._id);
  }

  changeTaskState() {
    if (this.props.task.state === 'pending') {
      Meteor.call('setComplete', this.props.task._id);
    }
  }

  renderTaskState() {
    const stateDecorators = {
      pending: '.',
      completed: 'x',
      event: 'o',
    };

    return stateDecorators[this.props.task.state];
  }

  render() {
    return (
      <li className="collection-item">
        <button className="btn right" onClick={this.deleteThisTask}>&times;</button>
        <button className="btn-floating red lighten-2" onClick={this.changeTaskState}>
          {this.renderTaskState()}
        </button>&nbsp;
        {this.props.task.text}
      </li>
    );
  }
}

TaskLine.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
