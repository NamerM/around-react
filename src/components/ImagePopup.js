import React from 'react';

function ImagePopup({name, link, card, cardText, isOpen, onClose}) {

return (
  <>
  <section className={`popup popup_type_${name} ${isOpen ? 'popup_open' : ''}`}>
    <div className="popup__square popup__square_preview">
      <button type='button' className='popup__close popup__close_preview' onClick={onClose}></button>
      <img className="popup__image" src={card} alt={cardText} />
      <p className="popup__subtitle"></p>
    </div>
  </section>
  </>
  )
}


export default ImagePopup;
