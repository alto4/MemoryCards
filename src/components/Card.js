import React from 'react';

const Card = (props) => {
  return (
    <div
      className="card"
      key={props.index}
      onClick={props.cardClick}
      data-id={props.card.name}
    >
      <img src={props.card.imageURL} alt="" />
    </div>
  );
};

export default Card;
