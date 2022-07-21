import React from 'react';

function PopupWithForm({ title, name, isOpen, buttonText = "Save", onClose, children })
{  //arguments in popupwithform function


  return(
    <>
      <section className={`popup popup_type_${name} ${isOpen ? 'popup_open' : ''}`}>
        <div className="popup__square">
          <form className="popup__form" name={name} noValidate>
            <h1 className="popup__title">{title}</h1>
            {children}
            <button type='submit' className="popup__save">{buttonText}</button>
            <button type='button' className='popup__close' onClick={onClose}></button>
          </form>
        </div>
      </section>
    </>
  )
}


export default PopupWithForm;

{/*


  <section className="popup popup_type_avatar-change" id="popup-template-avatar">
    <div className="popup__square">
      <form name="avatarChange" className="popup__form popup__form_avatar" novalidate>
        <h1 className="popup__title">Change Profile Picture</h1>
        <label className="popup__formfield">
          <input className="popup__input popup__input_type_link" type="url" placeholder="Picture Url"  id="link" name="link"  required />
          <span id="link-error" className="popup__input-error"></span>
        </label>
        <button type='submit' className="popup__save">Save</button>
        <button type='button' className='popup__close popup__close_add'></button>
      </form>
    </div>
  </section> */}

  {/* <section className="popup popup_type_confirm" id="popup-template-confirm">
    <div className="popup__square">
      <form name="confirmDelete" className="popup__form popup__form_confirmDelete">
        <h1 className="popup__title popup__title_confirmDelete">Are you sure?</h1>
        <button type='submit' className="popup__save popup__save_confirmDelete">Yes</button>
        <button type='button' className='popup__close popup__close_add'></button>
      </form>
    </div>
  </section>

  <section className="popup popup_type-preview" id="popup-image">
    <div className="popup__square popup__square_preview">
      <button type='button' className='popup__close popup__close_preview'></button>
      <img className="popup__image" src=" " alt=" " />
      <p className="popup__subtitle"></p>
    </div>
  </section> */}
