import React, { useState } from 'react';
import memoryCards from './Cards';

function CardsContainer() {
  const [cardsClicked, setCardsClicked] = useState([]);
  const [cards, setCards] = useState(memoryCards);

  // Use Fisher-Yates shuffle to randomize cards -> reverse through an array and swap each element with a random element that comes before it (with a lower index)
  const shuffleCards = () => {
    let cardsArray = [...cards];

    // Reverse through array
    for (let i = cardsArray.length - 1; i > 0; i--) {
      // Swap with random element stored in a lower index than i is currently set to
      let j = Math.floor(Math.random() * (i + 1));
      // Use destructuring to swap elements easily
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }

    console.log(cardsArray);
    setCards(cardsArray);
  };

  const cardClick = (e) => {
    console.log(e.currentTarget.getAttribute('data-id') + ' was clicked.');

    let arr = [...cardsClicked];
    arr.push(e.currentTarget.getAttribute('data-id'));
    setCardsClicked(arr);

    // Check if card has already been clicked

    shuffleCards();
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
