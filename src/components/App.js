import React  from 'react';

import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from '../components/PopupWithForm.js'
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import api from  "../utils/Api.js";

import { CurrentUserContext } from './contexts/CurrentUserContext.js';

import '../index.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(undefined);



  React.useEffect(() => {  //useEffect başına React. eklendi
    api.getUserInfo()
      .then( res => {  //{name, about, avatar, _id/id api}
        setCurrentUser(res);
      })
      .catch(console.log);
    }, [])




  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(undefined);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser({name, about}){
    api.editProfile(name, about)
      .then( res => {
        setCurrentUser({
          name: res.name,
          about: res.about,
        })
        closeAllPopups()
      })
      .catch(console.log)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm title="New Place" name="add-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText ="Create">
          <label className="popup__formfield">
              <input className="popup__input popup__input_type_title" type="text" placeholder="Title" id="cardTitle" name="cardTitle" minLength="1" maxLength="30" required />
            <span id="cardTitle-error" className="popup__input-error"></span>
            </label>
            <label className="popup__formfield">
              <input className="popup__input popup__input_type_link" type="url" placeholder="Link"  id="cardImageLink" name="cardImageLink"  required/>
              <span id="cardImageLink-error" className="popup__input-error"></span>
            </label>
          </PopupWithForm>

        <PopupWithForm title="Change Profile Picture" name="avatar-change" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText = "Change">
          <label className="popup__formfield">
            <input className="popup__input popup__input_type_link" type="url" placeholder="Picture Url"  id="link" name="link"  required />
            <span id="link-error" className="popup__input-error"></span>
          </label>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />


        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
         // onCardLike={handleCardLike}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;


// <PopupWithForm title="Edit Profile" nam  e="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}> {/* <EditProfilePopup>  */}
// <label className="popup__formfield">
//   <input className="popup__input popup__input_type_name" type="text" placeholder="Name" id="name" minLength="2" maxLength="40" required/>
//   <span id="name-error" className="popup__input-error"></span>
// </label>
// <label className="popup__formfield">
//   <input className="popup__input popup__input_type_profession" type="text" placeholder="Profession" id="profession" minLength="2" maxLength="200" required/>
//   <span id="profession-error" className="popup__input-error"> </span>
// </label>
// </PopupWithForm>
