import { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = {
    name: 'ghcards',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
      </div>
    );
  }
}
