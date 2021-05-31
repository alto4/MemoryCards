import React from 'react';

const RulesModal = () => {
  return (
    <div className="rules-modal">
      <h2>How to Play</h2>
      <ul>
        <li>The goal is to select cards that have not yet been clicked on.</li>
        <li>
          Try to name the name of the note you are clicking on, or write it on a
          sheet of scrap paper to keep track of what has already been selected.
        </li>
        <li>
          Once you click on a card, you will recieve a point if the card has not
          already been selected.
        </li>
        <li>
          If the card HAS already been selected, you lose and your score will be
          reset to 0.
        </li>
        <li>
          To win them game you must select all 9 unique cards without selecting
          any cards twice.
        </li>
      </ul>
    </div>
  );
};

export default RulesModal;
