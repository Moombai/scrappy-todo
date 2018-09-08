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
          action: "Refactor the todo component. It's very messy",
          status: "incomplete"
        },
        {
          action: "Add CSS and make it look pretty. ",
          status: "incomplete"
        },
        {
          action: "Remove the linting errors",
          status: "incomplete"
        },
        {
          action: "Clean up the comments!",
          status: "incomplete"
        },
        {
          action: "Add button to mark task as completed",
          status: "complete"
        },
        {
          action: "Add filters to show only tasks completed",
          status: "complete"
        }
  		],
      filtered: false
  	}
  	this.addTask = this.addTask.bind(this);
  	this.deleteTask = this.deleteTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }
  
  addTask(newTask) {
  	// create a copy of the existing state with the newTask added
  	let stateCopy = [...this.state.tasks, newTask];
  	this.setState({
  		tasks: stateCopy
  	});
  }

  updateTaskStatus(taskToUpdate) {
    //accepts the current task using a key/index reference {}
    // take a copy of the current state
    let stateCopy = [...this.state.tasks];
    let currentTaskStatus = stateCopy[taskToUpdate].status;
    //if status is completed render completed otherwise render incomplete
    if(currentTaskStatus === 'incomplete') {
      stateCopy[taskToUpdate].status = 'complete';
    } else {
      stateCopy[taskToUpdate].status = 'incomplete';
    }
    // set state and render
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

  toggleFilter() {
    this.setState({ filtered: !this.state.filtered })
  }

  render() {
    return (
      <div>
        <Header />
        <Todo
          task={this.state.tasks}
          filterState={this.state.filtered}
          addTask={this.addTask}
          toggleStatus={this.updateTaskStatus}
          deleteTask={this.deleteTask}
          toggleFilter={this.toggleFilter}
        />
      </div>
    );
  }
}

export default App;