import React from 'react';


function Card({ card, onClick }) {
  const { name, link} = card;

  function handleClick() {
   onClick(card);
  }

return (

  <li className="elements__card">
      <button className="elements__button-delete" type="button"></button>
      <img className="elements__image"
        src={link}
        alt={name}
        onClick={handleClick}
        />
      <div className="elements__handle">
        <h2 className="elements__card-text">{name}</h2>
        <div className="elements__handle_likecolumn">
          <button className="elements__button-like" type="button"></button>
          <p className="elements__card_likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}


export default Card;


