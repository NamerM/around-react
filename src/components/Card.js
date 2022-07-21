import React from 'react';


function Card({card, cardText, onCardClick }) {


  return (
<>
  <li className="elements__card">
      <button className="elements__button-delete" type="button"></button>
      <img className="elements__image" src={card} alt={cardText} onClick={onCardClick} />
      <div className="elements__handle">
        <h2 className="elements__card-text"></h2>
        <div className="elements__handle_likecolumn">
          <button className="elements__button-like" type="button"></button>
          <p className="elements__card_likes"></p>
        </div>
      </div>
    </li>
</>
  )
}


export default Card;
