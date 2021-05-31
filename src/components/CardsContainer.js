import React, { useState } from 'react';
import memoryCards from './Cards';

function CardsContainer() {
  const [cardsClicked, setCardsClicked] = useState([]);
  const [cards, setCards] = useState(memoryCards);

  // Use Fisher-Yates shuffle to randomize cards -> reverse through an array and swap each element with a random element that comes before it (with a lower index)
  // REFERENCE: https://javascript.info/task/shuffle
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

  // Check if card has already been clicked in current game
  const checkCardSelection = (target) => {
    return cardsClicked.indexOf(target) > -1 ? true : false;
  };

  const cardClick = (e) => {
    let arr = [...cardsClicked];
    let clickedCard = e.currentTarget.getAttribute('data-id');
    arr.push(clickedCard);
    setCardsClicked(arr);

    // Check if card has already been clicked
    checkCardSelection(clickedCard)
      ? console.log('already clicked')
      : console.log('not clicked');
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
