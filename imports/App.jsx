import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';
import AddTask from './AddTask.jsx';

// App component - represents the whole app
class App extends Component {
  renderTasks(){
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
  renderAdd(){
    return <AddTask />
  }
  render() {
    return (
      <div className="container">
        <div className = "addTodo">
          <h3>Add a new to-do item</h3>
          {this.renderAdd()}
        </div>
        <div className="tasks">
          <h3>To-Do List</h3>
            <ul>
              {this.renderTasks()}
            </ul>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);
