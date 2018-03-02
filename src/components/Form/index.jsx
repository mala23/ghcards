import React, {Component } from 'react'
import axios from 'axios'

class Form extends Component {
  state = { userName: '' }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName)
    axios.get('https://api.github.com/users/' + this.state.userName)
      .then(resp => {
        this.props.onSubmit(resp.data);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        onChange={(event) => this.setState({ userName: event.target.value })}
        placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default Form
