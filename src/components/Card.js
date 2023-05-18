import React from 'react'
import '../styling/Card.css'

const Card = ({ id, brandName, imgSrc, handleClick }) => {

  const styles = {
    backgroundImage: `url(${imgSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  }

  return (
    <div className='card' id={id} style={styles} onClick={(e) => handleClick(e)}></div>
  )
}

export default Card