function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <form className="popup__form" name={props.name} noValidate onSubmit={props.onSubmit}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            type="submit"
            className={`popup__save-btn popup__save-btn_${props.name}`}
          >
            {props.buttonText}
          </button>
        </form>
        <button onClick={props.onClose} type="button" className="popup__close-icon opacity"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
