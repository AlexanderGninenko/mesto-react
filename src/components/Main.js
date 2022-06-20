import React from "react";
import { api } from "../utils/Api";



function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
    .then((data)=> {
      const userData = data;
      console.log(userData);
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
    
  })

  return (
    <main className="wrapper">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-wrapper">
            <img src='#' alt="Фото профиля" className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></img>
            <button
              onClick={props.onEditAvatar}
              type="button"
              className="profile__avatar-edit-button"
            ></button>
          </div>
          <div className="profile__wrapper">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{userName}</h1>
              <button
                onClick={props.onEditProfile}
                type="button"
                className="profile__edit-btn opacity"
                aria-label="Редактировать профиль"
              ></button>
            </div>

            <p className="profile__status">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-btn opacity"
          type="button"
          aria-label="Добавить место"
        ></button>
      </section>
      <section className="photo-grid">
        <ul className="photo-grid__wrapper"></ul>
      </section>
    </main>
  );
}

export default Main;
