import React, { Component } from 'react';
import { Header } from './Header';
import { Todo } from './Todo';
import '../App.css';

class App extends Component {
  constructor(){
  	super();
  	this.state = {
  		tasks: [
  		"Hello I'm all alone",
  		"maybe I'm not alone",
  		"I'm just coming along for the ride"
  		]
  	}
  	this.addTask = this.addTask.bind(this);
  }
  
  addTask(newTask) {
  	// create a copy of the existing state with the newTask added
  	let stateCopy = [...this.state.tasks, newTask];
  	this.setState({
  		tasks: stateCopy
  	});
  }

  render() {
    return (
      <div>
        <Header />
        <Todo task={this.state.tasks} addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;