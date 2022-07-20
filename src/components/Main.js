import React from 'react';
import profileImage from '../images/image.jpg';
import profileButton from '../images/edit-pen.svg';


function Main() {
return (
  <main className="content">
    <section className="profile">
    <div className="profile__image"> <img className="profile__imagecontent" src={profileImage} alt="Profile User" /> </div>

      <div className="profile__info">
        <div className="profile__line-header">
          <h2 className="profile__header">Cousteau </h2>
          <button type="button" className="profile__button"><img src={profileButton} className="profile__button_image" alt="Button" /></button>
        </div>
        <p className="profile__profession">Explorer</p>
      </div>

      <button  type="button" className="add-button"></button>
    </section>

    <section className="elements page__section">
      <ul className="elements__cards"></ul>
    </section>
  </main>
  )
}

export default Main;
