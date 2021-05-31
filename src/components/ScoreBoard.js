import React from 'react';

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="current-score">Current Score: {props.currentScore}</div>
      <h1>Musical Memory Cards</h1>
      <div className="high-score">High Score: {props.highScore}</div>
    </div>
  );
};

export default Scoreboard;
