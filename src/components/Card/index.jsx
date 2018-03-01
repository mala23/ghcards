import React, { Component } from 'react'
import styles from './card.component.css'

const Card = (props) => {
  return (
      <article>
        <img src={props.avatar_url} />
        <section>
          <p className="Name">{props.name}</p>
          <p>{props.company}</p>
        </section>
      </article>
  )
}

export default Card
