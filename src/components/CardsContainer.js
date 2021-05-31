import React, { useState } from 'react';
import cards from './Cards';

function CardsContainer() {
  const [cardsClicked, setCardsClicked] = useState([]);

  const shuffleCards = () => {};

  const cardClick = (e) => {
    console.log(e.currentTarget.getAttribute('data-id') + ' was clicked.');

    let arr = [...cardsClicked];
    arr.push(e.currentTarget.getAttribute('data-id'));
    setCardsClicked(arr);
  };

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div
          className="card"
          key={index}
          onClick={cardClick}
          data-id={card.name}
        >
          <img src={card.imageURL} alt="" />
        </div>
      ))}
    </div>
  );
}

export default CardsContainer;
