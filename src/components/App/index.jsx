import React, { Component } from 'react'
import CardList from '../CardList'
import {data} from '../CardList/'

class App extends Component {
  render() {
    return (
      <CardList cards={data}/>
    )
  }
}

export default App
