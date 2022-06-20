function ImagePopup() {
  return (
    <div className="popup popup_dark_theme popup_image">
      <div className="popup__image-wrapper">
        <button type="button" className="popup__close-icon opacity"></button>
        <img src="." alt="" className="popup__image"></img>
        <span className="popup__image-description"></span>
      </div>
    </div>
  );
}

export default ImagePopup;
