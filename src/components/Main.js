import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAllNeededData()
      .then(([cards, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <main className="wrapper">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-wrapper">
            <img
              src={userAvatar}
              alt="Фото профиля"
              className="profile__avatar"
            ></img>
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
        <ul className="photo-grid__wrapper">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardDelete={props.onCardDelete}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
