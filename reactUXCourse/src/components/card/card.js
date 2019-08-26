import React from "react"
import './card.scss'

const Card = props => (
    <div className="Card">
      <img src={props.image} alt={props.alt}/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>

    </div>
)

export default Card
