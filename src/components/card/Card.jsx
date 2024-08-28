import React from 'react'
import './Card.css'
const Card = ({name, description, price, image}) => {
  return (
    <div className='cardContainer'>
        <h3>{name}</h3>
        {/* <img src={image} alt={name}/> */}
        <p>{description}</p>
        <h5>Prezzo: <br />{price.toFixed(2)} €</h5>
    </div>
  )
}

export default Card