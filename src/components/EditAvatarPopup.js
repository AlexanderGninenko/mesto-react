import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} buttonText='Сохранить' onClose={props.onClose}>
      <input
        name="userAvatar"
        type="url"
        className="popup__input popup__input_data_about"
        id="userAvatar-input"
        placeholder="Ссылка на картинку"
        required
      ></input>
      <span className="popup__input-error userAvatar-input-error"></span>
    </PopupWithForm>
   
  );
}

export default EditAvatarPopup;
