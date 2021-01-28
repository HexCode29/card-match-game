import React from 'react'


// styled-component
import CardDiv from "./styled/CardStyle";

const Card = props => {
  const {frontImg, backImg, flipped, onClick} = props
  const img = flipped ? frontImg : backImg;
  return (
    <CardDiv className="Card" onClick={onClick}>
      <img src={img} alt=""/>
    </CardDiv>
  )
}

export default Card