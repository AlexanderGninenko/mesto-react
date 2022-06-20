import React from 'react';
import './index.css';
import logo from './images/Mesto.svg';

function App() {
  return (
    <body className="page">
    <header className="header">
        <img className="header__logo" src={logo} alt="Логотип Место"></img>
    </header>

    <main className="wrapper">
        <section className="profile">

            <div className="profile__info">
                <div className="profile__avatar-wrapper">
                    <img src="#" alt="Фото профиля" className="profile__avatar"></img>
                    <button type="button" className="profile__avatar-edit-button"></button>
                </div>
                <div className="profile__wrapper">
                    <div className="profile__name-wrapper">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit-btn opacity"
                            aria-label="Редактировать профиль"></button>
                    </div>

                    <p className="profile__status">Исследователь океана</p>
                </div>
            </div>
            <button className="profile__add-btn opacity" type="button" aria-label="Добавить место"></button>
        </section>
        <section className="photo-grid">
            <ul className="photo-grid__wrapper">
            </ul>

        </section>
    </main>
    <div className="popup popup_profile">
        <div className="popup__container">
            <form className="popup__form" name="popupProfileForm" novalidate>
                <h2 className="popup__title">Редактировать профиль</h2>
                <input id="profile-name-input" className="popup__input popup__input_profile_name" type="text"
                    name="profileFormName" minlength="2" maxlength="40" required></input>
                <span className="profile-name-input-error popup__input-error"></span>
                <input id="profile-status-input" className="popup__input popup__input_profile_status" type="text"
                    name="profileFormStatus" minlength="2" maxlength="200" required></input>
                <span className="profile-status-input-error popup__input-error"></span>

                <button type="submit" className="popup__save-btn popup__save-btn_profile">Сохранить</button>
            </form>
            <button type="button" className="popup__close-icon opacity"></button>
        </div>
    </div>

    <div className="popup popup_avatar">
        <div className="popup__container">
            <form className="popup__form" name="popupAvatarEditForm" novalidate>
                <h2 className="popup__title">Обновить аватар</h2>
                <input name="userAvatar" type="url" className="popup__input popup__input_data_about" id="userAvatar-input"
                    placeholder="Ссылка на картинку" required></input>
                <span className="popup__input-error userAvatar-input-error"></span>
                <button type="submit" className="popup__save-btn">Сохранить</button>
            </form>
            <button type="button" className="popup__close-icon"></button>
        </div>
    </div>

    <div className="popup popup_confirm-delete">
        <div className="popup__container">
            <form className="popup__form" name="popupConfirmDeleteForm" novalidate>
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="submit" className="popup__save-btn">Да</button>
            </form>
            <button type="button" className="popup__close-icon"></button>
        </div>
    </div>

    <div className="popup popup_place">
        <div className="popup__container">
            <form className="popup__form " name="popupPlaceForm" novalidate>
                <h2 className="popup__title">Новое место</h2>
                <input id="place-name-input" className="popup__input popup__input_place_name" type="text"
                    name="name" placeholder="Название" minlength="1" maxlength="30" required></input>
                <span className="place-name-input-error popup__input-error"></span>

                <input id="place-link-input" className="popup__input popup__input_place_link" type="url"
                    name="link" placeholder="Ссылка на картинку" required></input>
                <span className="place-link-input-error popup__input-error"></span>

                <button type="submit" className="popup__save-btn popup__save-btn_place">Создать</button>
            </form>
            <button type="button" className="popup__close-icon opacity"></button>
        </div>
    </div>

    <div className="popup popup_dark_theme popup_image">
        <div className="popup__image-wrapper">
            <button type="button" className="popup__close-icon opacity"></button>
            <img src="." alt="" className="popup__image"></img>
            <span className="popup__image-description"></span>
        </div>
    </div>

    <footer className="footer">
        <p className="footer__text">© 2022 Mesto Russia</p>
    </footer>

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
