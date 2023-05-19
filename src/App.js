import './index.css'
import HeadBanner from './components/HeadBanner';
import ScoreCard from './components/ScoreCard';
import Selections from './components/Selections';
import Modal from './components/Modal';
import { useState, useEffect } from 'react';
import data from './data';

function App() {

  // Score & High score states
  const [scores, setScores] = useState({ score: 0, highScore: 0 })

  // Set state for the card clicked by user
  const [selectedCard, setSelectedCard] = useState({});

  // Set state for all previously clicked cards
  const [previousCards, setPreviousCards] = useState([]);

  // UseEffect to randomise the order of the cards that updates after every click
  useEffect(() => {
    data.sort(() => (Math.random() > 0.5) ? 1 : -1);
  }, [scores.score])


  if (previousCards.length === 15) {
   gameOver();
  }

  function handleClick(e) {

    // Get the id of the card selected by the user
    let divId = Number(e.target.id)

    // Loop through each brand object in the data
    for (let i = 0; i < data.length; i++) {

      // If the id of the card selected matches the ith object
      if (divId === data[i].id) {

        // Check if the user has previously selected that card
        if (!checkPreviousState(data[i])) {

          // If not, add the selected card to the array of previously selected cards
          updateScores()
          setPreviousCards([...previousCards, data[i]])
        } else {
          setScores(prevState => ({...prevState, score: 0}));
          setPreviousCards([])
        }
      }
    }
  }

  function checkPreviousState(obj) {

    // Loop through all previously selected cards
    for (let i = 0; i < previousCards.length; i++) {

      // Check if the card selected by the user has been previously selected
      if (obj === previousCards[i]) {

        // If so, return true from the function
        return true
      }
    }
  }

  function updateScores() {

    // Get the current score and current high score
    let currentScore = scores.score, currentHighScore = scores.highScore;

    // Check if current score is less than the current high score
    if (scores.score < scores.highScore) {

      // If so, update only the score value in state
      setScores(prevState => ({...prevState, score: prevState.score++}))
      
    } else if (scores.score === scores.highScore) {

      // If the current score equals the current high score, increment both values and update
      // both values in state
      currentScore++;
      currentHighScore++;

      if (currentScore === 15) {
        gameOver();
      }
      setScores({score: currentScore, highScore: currentHighScore})
    }
  }

  function gameOver() {

    // Select the modal container from the DOM and add a class of active to display it
    document.querySelector('.modal-container').classList.add('active')
    
  }

  return (
    <div className="App">
      <HeadBanner />
      <ScoreCard 
      scores={scores}
      setScores={setScores}
      />
      <Selections 
      selectedCard={selectedCard}
      setSelectedCard={setSelectedCard}
      previousCards={previousCards}
      setPreviousCards={setPreviousCards}
      handleClick={handleClick}
      />
      <div className='modal-container'>
        <Modal 
        scores={scores} 
        setScores={setScores}
        previousCards={previousCards}
        setPreviousCards={setPreviousCards}
        />
      </div>
    </div>
  );
}

export default App;
