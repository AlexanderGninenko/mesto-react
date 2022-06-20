import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm name='place' title='Новое место' buttonText='Создать' isOpen={props.isOpen} onClose={props.onClose}>
    
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

    </PopupWithForm>
  );
}

export default AddPlacePopup;