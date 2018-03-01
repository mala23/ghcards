import React, {Component } from 'react'

class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Event: form submit")
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default Form
