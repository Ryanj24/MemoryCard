import './index.css'
import HeadBanner from './components/HeadBanner';
import ScoreCard from './components/ScoreCard';
import Selections from './components/Selections';

function App() {
  return (
    <div className="App">
      <HeadBanner />
      <ScoreCard />
      <Selections />
    </div>
  );
}

export default App;
