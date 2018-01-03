import React, { Component } from 'react';
import { Header } from './Header';
import { Todo } from './Todo';
import '../App.css';

class App extends Component {
  constructor(){
  	super();
  	this.state = {
  		tasks: [
        {
          action: "Change the tasks state from an array to an object so it's more flexible",
          status: "incomplete"
        },
        {
          action: "Add button to mark task as completed",
          status: "incomplete"
        },
        {
          action: "Add filters to show only tasks completed",
          status: "incomplete"
        }
  		]
  	}
  	this.addTask = this.addTask.bind(this);
  	this.deleteTask = this.deleteTask.bind(this);
  }
  
  addTask(newTask) {
  	// create a copy of the existing state with the newTask added
  	let stateCopy = [...this.state.tasks, newTask];
  	this.setState({
  		tasks: stateCopy
  	});
  }

  deleteTask(taskToDelete) {
  	let stateCopy = [...this.state.tasks];
  	stateCopy.splice(taskToDelete,1);
  	this.setState({
  		tasks: stateCopy
  	});
  }

  render() {
    return (
      <div>
        <Header />
        <Todo task={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;