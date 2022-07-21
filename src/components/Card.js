import React from 'react';


function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

return (
<>
  <li className="elements__card">
      <button className="elements__button-delete" type="button"></button>
      <img className="elements__image" src={props.link} alt={props.name} onClick={props.handleClick} />
      <div className="elements__handle">
        <h2 className="elements__card-text">{props.name}</h2>
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
