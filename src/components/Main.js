import React from 'react';
import profileImage from '../images/image.jpg';
import profileButton from '../images/edit-pen.svg';
import addButton from '../images/add-button.svg';

function Main() {


  function togglePopup(){
    document.body.classList.toggle('popup_open', isActive);
  }

  function PopupAvatar(){
    const [isActive, setIsActive] = React.useState(false);

      React.useEffect( () => {
        togglePopup(isActive)
        }
      );

      function handleEditAvatarClick(){
        setIsActive(!isActive);
      }
      return (
        <section className="popup popup_type_avatar-change" id="popup-template-avatar" onClick={handleEditAvatarClick}>
          <div className="popup__square">
            <form name="avatarChange" className="popup__form popup__form_avatar" novalidate>
              <h1 className="popup__title">Change Profile Picture</h1>
              <label className="popup__formfield">
                <input className="popup__input popup__input_type_link" type="url" placeholder="Picture Url"  id="link" name="link"  required />
                <span id="link-error" className="popup__input-error"></span>
              </label>
              <button type='submit' className="popup__save" >Save</button>
              <button type='button' className='popup__close popup__close_add'></button>
            </form>
          </div>
        </section>
          );
    }




  // function handleEditProfile(){
  //   setIsActive(true);
  // }

  // function handleAddPlaceClick(){
  //   setIsActive(true);
  // }



return (
  <main classNameName="content">
    <section classNameName="profile">
    <div classNameName="profile__image"> <img classNameName="profile__imagecontent" src={profileImage} alt="Profile User" /> </div>

      <div classNameName="profile__info">
        <div classNameName="profile__line-header">
          <h2 classNameName="profile__header">Cousteau </h2>
          <button type="button" classNameName="profile__button"><img src={profileButton} classNameName="profile__button_image" alt="Button" /></button>
        </div>
        <p classNameName="profile__profession">Explorer</p>
      </div>

      <button  type="button" classNameName="add-button"><img src={addButton} classNameName="add-button__image" alt="Add Cards Button"></img></button>
    </section>

    <section classNameName="elements page__section">
      <ul classNameName="elements__cards"></ul>
    </section>
  </main>

  )
}

export default Main;
