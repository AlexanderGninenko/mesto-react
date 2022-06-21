function ConfirmDeletePopup() {
  return (
    <div className="popup popup_confirm-delete">
      <div className="popup__container">
        <form className="popup__form" name="popupConfirmDeleteForm" noValidate>
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="submit" className="popup__save-btn">
            Да
          </button>
        </form>
        <button type="button" className="popup__close-icon"></button>
      </div>
    </div>
  );
}

export default ConfirmDeletePopup;
