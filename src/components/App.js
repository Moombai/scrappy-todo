import React, { Component } from 'react';
import { Header } from './Header';
import Todo from './Todo';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Todo />
      </div>
    );
  }
}

export default App;
