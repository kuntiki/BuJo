import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskLine from './TaskLine';

export default class TaskList extends Component {
  renderTaskLines() {
    const tasks = this.props.tasks;

    return tasks.map(task => <TaskLine key={task._id} task={task} />);
  }

  render() {
    return (
      <div className="row">
        <div className="col-l6">
          <ul className="collection">
            {this.renderTaskLines()}
          </ul>
        </div>
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
  })).isRequired,
};
