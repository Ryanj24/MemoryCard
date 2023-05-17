import React from 'react'
import '../styling/ScoreCard.css'

const ScoreCard = ({ score, setScore, highScore, setHighScore }) => {
  return (
    <div className='scores'>
        <div className='current-score'>
            <p>Score: 0</p>
        </div>
        <div className='high-score'>
            <p>High Score: 3</p>
        </div>
    </div>
  )
}

export default ScoreCard