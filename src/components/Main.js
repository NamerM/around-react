import React from 'react';
// import profileImage from '../images/image.jpg';
import profileButton from '../images/edit-pen.svg';
import addButton from '../images/add-button.svg';
import api  from '../utils/Api.js';
import Card from './Card';


function Main({  onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick, handleClick}) { //handleCardClick

  const [userName, setUserName] = React.useState('');
  const [userProfession, setUserProfession] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserProfession(userData.about);
      setUserAvatar(userData.avatar);
    });

    api.getInitialCards().then((cardData) => {
      setCards(cardData);
    });

  }, []);


return (
  <main className="content">
    <section className="profile">
    <div className="profile__image" onClick={onEditAvatarClick}> <img className="profile__imagecontent" src={userAvatar} alt="Profile User" /> </div>

      <div className="profile__info">
        <div className="profile__line-header">
          <h2 className="profile__header">{userName} </h2>
          <button type="button" className="profile__button" onClick={onEditProfileClick}><img src={profileButton} className="profile__button_image" alt="Button" /></button>
        </div>
        <p className="profile__profession">{userProfession}</p>
      </div>

      <button  type="button" className="add-button" onClick={onAddPlaceClick}><img src={addButton} className="add-button__image" alt="Add Cards Button"></img></button>
    </section>

    <section className="elements page__section">
      <ul className="elements__cards">
        {cards.map((card, i) =>
          <Card key={i} {...card} onClick={onCardClick} /> )}
      </ul>
    </section>
  </main>
  )

}

export default Main;
