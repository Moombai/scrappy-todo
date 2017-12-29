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
  }
  render() {
    return (
      <div>
        <Header />
        <Todo task={this.state.tasks} />
      </div>
    );
  }
}

export default App;