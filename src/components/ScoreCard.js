import React from 'react'
import '../styling/ScoreCard.css'

const ScoreCard = ({ scores, setScores }) => {
  return (
    <div className='scores'>
        <div className='current-score'>
            <p>Score: {scores.score}</p>
        </div>
        <div className='high-score'>
            <p>High Score: {scores.highScore}</p>
        </div>
    </div>
  )
}

export default ScoreCard