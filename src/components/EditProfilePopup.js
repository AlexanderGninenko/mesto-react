import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose}>
   
          <input
            id="profile-name-input"
            className="popup__input popup__input_profile_name"
            type="text"
            name="profileFormName"
            minLength="2"
            maxLength="40"
            required
          ></input>
          <span className="profile-name-input-error popup__input-error"></span>
          <input
            id="profile-status-input"
            className="popup__input popup__input_profile_status"
            type="text"
            name="profileFormStatus"
            minLength="2"
            maxLength="200"
            required
          ></input>
          <span className="profile-status-input-error popup__input-error"></span>

   
    </PopupWithForm>
  );
}

export default EditProfilePopup;