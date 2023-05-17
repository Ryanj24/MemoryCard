import React from 'react'
import '../styling/Card.css'
import data from '../data.js'

const Card = ({ brandName, imgSrc}) => {
  return (
    <div className='card'>
        <div className='img-container'>
            <img src={imgSrc} alt={brandName}></img>
        </div>
    </div>
  )
}

export default Card