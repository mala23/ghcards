import React, { Component } from 'react'
import CardList from '../CardList'
import { data } from '../CardList/'
import Form from '../Form'

class App extends Component {
  render() {
    return (
      <article>
        <Form />
        <CardList cards={data}/>
      </article>
    )
  }
}

export default App
