import React from "react";
// import profileImage from '../images/image.jpg';
import profileButton from "../images/edit-pen.svg";
import addButton from "../images/add-button.svg";
import api from "../utils/Api.js";
import Card from "./Card";

import { CurrentUserContext } from './contexts/CurrentUserContext.js';

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
}) {

  const currentUser = React.useContext(CurrentUserContext)
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardData) =>  setCards(cardData)) // [{}, {}, {}, {...}]
      .catch(console.log);
    }, []);

    //{/* handeLikeClick card._id olduğundan burada sadece id objecti gerekiyor bize api.dele velike card._id card return card*/}
  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    api.cardLikeStatusChange(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    });

  }

  function handleCardDelete(card) {
    api.deleteCard(card).then(() => {
      setCards((state) => state.filter((cards) => cards._id !== card))
    });
   }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image" onClick={onEditAvatarClick}>
          {" "}
          <img
            className="profile__imagecontent"
            src={currentUser.avatar}
            alt="Profile User"
          />{" "}
        </div>

        <div className="profile__info">
          <div className="profile__line-header">
            <h2 className="profile__header">{currentUser.name} </h2>
            <button
              type="button"
              className="profile__button"
              onClick={onEditProfileClick}
            >
              <img
                src={profileButton}
                className="profile__button_image"
                alt="Button"
              />
            </button>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>

        <button type="button" className="add-button" onClick={onAddPlaceClick}>
          <img
            src={addButton}
            className="add-button__image"
            alt="Add Cards Button"
          />
        </button>
      </section>

      <section className="elements page__section">
        <ul className="elements__cards">
         {cards.map((card) => (
            <Card key={card._id} card={card} onClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
