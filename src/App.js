import './index.css'
import HeadBanner from './components/HeadBanner';
import ScoreCard from './components/ScoreCard';
import Selections from './components/Selections';
import { useState } from 'react';
import data from './data';

function App() {

  // Score & High score states
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Set state for the card clicked by user
  const [selectedCard, setSelectedCard] = useState({});

  // Set state for all previously clicked cards
  const [previousCards, setPreviousCards] = useState([]);

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
          //setSelectedCard(data[i])
          //setScore(score => score + 1)
          updateScores()
          setPreviousCards([...previousCards, data[i]])
        } else {
          setScore(0);
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

    if (score <= highScore) {
      setScore(score => score + 1);
    } else {
      setScore(score => score + 1)
      setHighScore(highScore => score)
    }

  }

  return (
    <div className="App">
      <HeadBanner />
      <ScoreCard 
      score={score}
      setScore={setScore}
      highScore={highScore}
      setHighScore={setHighScore}
      />
      <Selections 
      selectedCard={selectedCard}
      setSelectedCard={setSelectedCard}
      previousCards={previousCards}
      setPreviousCards={setPreviousCards}
      handleClick={handleClick}
      />
    </div>
  );
}

export default App;
