import React from "react";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);

  const handleEditAvatarClick = () => {
    setisEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setisEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setisAddPlacePopupOpen(true);
  };

  return (
    <body className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <EditProfilePopup 
      isOpen={isEditProfilePopupOpen}/>

      <EditAvatarPopup 
      isOpen={isEditAvatarPopupOpen}/>

      <ConfirmDeletePopup 
    
/>
      <AddPlacePopup 
      isOpen={isAddPlacePopupOpen}/>

      <ImagePopup />

      <Footer />
      <template id="card-template">
        <li className="card">
          <button className="card__delete-btn" type="button"></button>
          <img src="." alt="" className="card__image"></img>
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-wrapper">
              <button className="card__like-btn" type="button"></button>
              <span className="card__like-count">0</span>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
