import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  constructor() {
    super();
    this.insertTask = this.insertTask.bind(this);
  }

  insertTask(event) {
    // Do not reload page
    event.preventDefault();

    // Get task
    const text = this.textInput.value.trim();

    // Insert task when text is not blank
    if (text !== '') {
      if (this.props.forSection === 'date') {
        const newTask = {
          task: text,
          day: this.props.date,
        };

        Meteor.call('addTaskForDay', newTask, () => {
          // Clean form
          this.textInput.value = '';
        });
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.insertTask}>
        <input
          type="text"
          ref={(node) => { this.textInput = node; }}
          placeholder="Type to add new task"
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  forSection: PropTypes.string.isRequired,
};
