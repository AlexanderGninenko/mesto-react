function AddPlacePopup() {
  return (
    <div className="popup popup_place">
      <div className="popup__container">
        <form className="popup__form " name="popupPlaceForm" novalidate>
          <h2 className="popup__title">Новое место</h2>
          <input
            id="place-name-input"
            className="popup__input popup__input_place_name"
            type="text"
            name="name"
            placeholder="Название"
            minlength="1"
            maxlength="30"
            required
          ></input>
          <span className="place-name-input-error popup__input-error"></span>

          <input
            id="place-link-input"
            className="popup__input popup__input_place_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          ></input>
          <span className="place-link-input-error popup__input-error"></span>

          <button
            type="submit"
            className="popup__save-btn popup__save-btn_place"
          >
            Создать
          </button>
        </form>
        <button type="button" className="popup__close-icon opacity"></button>
      </div>
    </div>
  );
}

export default AddPlacePopup;