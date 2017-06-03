import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';

export default class AddTask extends Component {
  handleAdd(event){
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.addTask).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    ReactDOM.findDOMNode(this.refs.addTask).value = '';
  }
  render(){
    return (
      <form className="addTask" onSubmit={this.handleAdd.bind(this)}>
        <input
          type="text"
          ref="addTask"
          placeholder="Type to add a new task"
          />
      </form>
    )
  }
}
