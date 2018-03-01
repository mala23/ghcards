import React, { Component } from 'react'
import Card from '../Card/'

let data = [
  { name: "Luca Nils Schmid",
    avatar_url: "https://avatars1.githubusercontent.com/u/7280956?v=4",
    company: "Vimcar",
  }
]

const CardList = (props) => {
  return (
    <article>
      {props.cards.map(card => <Card {...card} />)}
    </article>
  )
}

export default CardList
export {data}
