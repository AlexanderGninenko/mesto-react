function EditProfilePopup() {
  return (
    <div className="popup popup_profile">
      <div className="popup__container">
        <form className="popup__form" name="popupProfileForm" novalidate>
          <h2 className="popup__title">Редактировать профиль</h2>
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

          <button
            type="submit"
            className="popup__save-btn popup__save-btn_profile"
          >
            Сохранить
          </button>
        </form>
        <button type="button" className="popup__close-icon opacity"></button>
      </div>
    </div>
  );
}

export default EditProfilePopup;