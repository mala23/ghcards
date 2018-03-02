import React, { Component } from 'react'
import CardList from '../CardList'
import { data } from '../CardList/'
import Form from '../Form'


class App extends Component {
  state = {
    cards: []
  }

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }))
  }

  render() {
    return (
      <article>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </article>
    )
  }
}

export default App
