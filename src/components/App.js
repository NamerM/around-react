import React  from 'react';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import api from  "../utils/Api.js";

import { CurrentUserContext } from './contexts/CurrentUserContext.js';
import '../index.js';


function App() {
  const [currentUser, setCurrentUser] = React.useState({});   // {name, about, avatar }
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(undefined);   // gerekirse cards, setCards değiştir ln 53 , 57 110
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {  //useEffect başına React. eklendi
    api.getUserInfo()
      .then( res => {  // { data: { name, avatar, about, _id}}
        setCurrentUser(res);
      })
    api.getInitialCards()
      .then( res => {
        //const formattedCard = res.map((card) => ({ title: card.name, url: card.link}))
        setCards(res);
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
          ...currentUser, name: res.name, about: res.about })
      })
      .catch(console.log)
      .finally(() => {
        closeAllPopups()
      })
  }

  function handleUpdateAvatar({avatar}) {
    api.editAvatar(avatar)
      .then( res => {
        //console.log(res.avatar)
        setCurrentUser({...currentUser, avatar: res.avatar })
      })
      .catch(console.log)
      .finally(() => {
        closeAllPopups()
      })
  }

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

   function handleAddPlaceSubmit({ name, link }) {
    api.addCard(name, link)
    .then( res => {
      const newCard = { title: res.name, url: res.link}
      console.log(newCard);
      setCards([newCard , ...cards, ]);
    })

    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards = {cards}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

