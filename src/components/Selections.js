import React from 'react'
import '../styling/Selections.css'
import data from '../data.js'
import Card from './Card'

const Selections = () => {
  return (
    <div className='card-grid'>
      {data.map(brand => 
        <Card 
        key={brand.id}
        brandName={brand.brand}
        imgSrc={brand.img}/>
      )}
    </div>
  )
}

export default Selections