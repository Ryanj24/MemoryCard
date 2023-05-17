import React from 'react'
import '../styling/Card.css'

const Card = ({ id, brandName, imgSrc, handleClick}) => {
  return (
    <div className='card' id={id} onClick={handleClick}>
      <img src={imgSrc} alt={brandName}></img>
        {/*<div className='img-container' id={id} onClick={handleClick}>
            <img src={imgSrc} alt={brandName}></img>
  </div>*/}
    </div>
  )
}

export default Card