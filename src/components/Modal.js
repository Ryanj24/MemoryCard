import React from 'react'
import '../styling/Modal.css'

const Modal = ({ scores, setScores, setPreviousCards }) => {

  function restartGame() {
    document.querySelector('.modal-container').classList.remove('active');

    setScores({ score: 0, highScore: 0 })
    setPreviousCards([]);
  }


  return (
    <div className='modal'>
        <h1>Game Over!</h1>
        <h2>You selected all cards!</h2>
        <button id='playAgainBtn' onClick={restartGame}>Play Again</button>
    </div>
  )
}

export default Modal