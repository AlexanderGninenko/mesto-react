import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  useEffect(()=> {
    setName('');
    setLink('');
  },[props.isOpen])

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="place-name-input"
        className="popup__input popup__input_place_name"
        type="text"
        name="name"
        placeholder="Название"
        minLength="1"
        maxLength="30"
        required
        onChange={handleNameChange}
        value={name}
      ></input>
      <span className="place-name-input-error popup__input-error"></span>

      <input
        id="place-link-input"
        className="popup__input popup__input_place_link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        onChange={handleLinkChange}
        value={link}
      ></input>
      <span className="place-link-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
