import React from "react";

function PopupWithForm({
  title,
  name,
  isOpen,
  buttonText = "Save",
  onClose,
  children,
}) {
  //arguments in popupwithform function

  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`} >
      <div className="popup__square">
        <form className="popup__form" name={name}>
          <h1 className="popup__title">{title}</h1>
          {children}
          <button type="submit" className="popup__save">
            {buttonText}
          </button>
          <button
            type="button"
            className="popup__close"
            onClick={onClose}
          ></button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
