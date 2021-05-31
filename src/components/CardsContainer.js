import React, { useState } from 'react';
import Card from './Card';
import memoryCards from './Cards';

function CardsContainer(props) {
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

  // Handle click
  const cardClick = (e) => {
    let arr = [...cardsClicked];
    let clickedCard = e.currentTarget.getAttribute('data-id');

    // Check if card has already been clicked
    if (checkCardSelection(clickedCard)) {
      console.log('clear clicked cards array here!');
      setCardsClicked([]);

      props.resetScore();
    } else {
      props.incrementScore();

      arr.push(clickedCard);
      setCardsClicked(arr);
    }

    shuffleCards();
  };

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card key={index} card={card} cardClick={cardClick} />
      ))}
    </div>
  );
}

export default CardsContainer;
