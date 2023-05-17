import React from 'react'
import '../styling/Selections.css'
import data from '../data.js'
import Card from './Card'

const Selections = ({ selectedCard, setSelectedCard, previousCards, setPreviousCards, handleClick }) => {
  return (
    <div className='card-grid'>
      {data.map(brand => 
        <Card 
        key={brand.id}
        id={brand.id}
        brandName={brand.brand}
        imgSrc={brand.img}
        handleClick={handleClick}/>
      )}
    </div>
  )
}

export default Selections