import './index.css'
import HeadBanner from './components/HeadBanner';
import ScoreCard from './components/ScoreCard';
import Selections from './components/Selections';
import { useState, useEffect } from 'react';
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

    let divId = Number(e.target.id)

    for (let i = 0; i < data.length; i++) {
      if (divId === data[i].id) {
        if (!checkPreviousState(data[i])) {
          setSelectedCard(data[i])
          setPreviousCards([...previousCards, data[i]])
        }
      }
    }
  }

  function checkPreviousState(obj) {
    for (let i = 0; i < previousCards.length; i++) {
      if (obj === previousCards[i]) {
        return
      }
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
