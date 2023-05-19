import React from 'react'
import '../styling/Modal.css'

const Modal = ({ scores, setScores, previousCards, setPreviousCards }) => {

  function restartGame() {
    document.querySelector('.modal-container').classList.remove('active');
    
    setScores({ score: 0, highScore: 0 })
    setPreviousCards([]);
  }


  return (
    <div className='modal'>
        <h1>Game Over!</h1>
        <h3>Your Best Score: {scores.highScore}</h3>
        <button id='playAgainBtn' onClick={restartGame}>Play Again</button>
    </div>
  )
}

export default Modal