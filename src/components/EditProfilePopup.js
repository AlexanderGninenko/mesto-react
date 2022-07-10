import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      
    >
      <input
        id="profile-name-input"
        className="popup__input popup__input_profile_name"
        type="text"
        name="profileFormName"
        minLength="2"
        maxLength="40"
        placeholder="Введите имя"
        required
        onChange={handleNameChange}
        value={name || ''}
      ></input>
      <span className="profile-name-input-error popup__input-error"></span>
      <input
        id="profile-status-input"
        className="popup__input popup__input_profile_status"
        type="text"
        name="profileFormStatus"
        minLength="2"
        maxLength="200"
        placeholder="Введите статус"
        required
        onChange={handleDescriptionChange}
        value={description || ''}
      ></input>
      <span className="profile-status-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
