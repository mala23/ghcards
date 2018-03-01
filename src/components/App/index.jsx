import React, { Component } from 'react'
import CardList from '../CardList'
import { data } from '../CardList/'
import Form from '../Form'


class App extends Component {
  state = {
    cards: [
      {
        name: "Luca Nils Schmid",
        avatar_url: "https://avatars1.githubusercontent.com/u/7280956?v=4",
        company: "Vimcar",
      },
      {
        name: "Fadie Hannona",
        avatar_url: "https://avatars1.githubusercontent.com/u/7240284?v=4",
        company: "Deloitte Digital",
      }
    ]
  }

  render() {
    return (
      <article>
        <Form />
        <CardList cards={this.state.cards}/>
      </article>
    )
  }
}

export default App
