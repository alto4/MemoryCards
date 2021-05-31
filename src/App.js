import { useState } from 'react';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    if (score > highScore) {
      console.log('New high score');
      setHighScore(score);
    }

    setScore(0);
  };
  return (
    <div>
      <ScoreBoard currentScore={score} highScore={highScore} />
      <CardsContainer incrementScore={incrementScore} resetScore={resetScore} />
      <Footer />
    </div>
  );
}

export default App;
