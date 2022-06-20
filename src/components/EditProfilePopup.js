import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose}>
   
          <input
            id="profile-name-input"
            className="popup__input popup__input_profile_name"
            type="text"
            name="profileFormName"
            minlength="2"
            maxlength="40"
            required
          ></input>
          <span className="profile-name-input-error popup__input-error"></span>
          <input
            id="profile-status-input"
            className="popup__input popup__input_profile_status"
            type="text"
            name="profileFormStatus"
            minlength="2"
            maxlength="200"
            required
          ></input>
          <span className="profile-status-input-error popup__input-error"></span>

   
    </PopupWithForm>
  );
}

export default EditProfilePopup;