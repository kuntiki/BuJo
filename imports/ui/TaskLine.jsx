import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';


export default class TaskLine extends Component {
  deleteThisTask() {
    Meteor.call('deleteTask', this.props.task._id);
  }

  changeTaskState() {
    if (this.props.task.state === 'pending') {
      Meteor.call('setComplete', this.props.task._id);
    }
  }

  renderTaskState(state) {
    const stateDecorators = {
      pending: '.',
      completed: 'x',
      event: 'o',
    };

    return stateDecorators[state];
  }

  render() {
    return (
      <li className="collection-item">
        <button className="btn right" onClick={this.deleteThisTask.bind(this)}>&times;</button>
        <button className="btn-floating red lighten-2" onClick={this.changeTaskState.bind(this)}>
          {this.renderTaskState(this.props.task.state)}
        </button>&nbsp;
        {this.props.task.text}
      </li>
    );
  }
}
