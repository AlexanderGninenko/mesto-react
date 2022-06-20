function Main(props) {

    

  return (
    <main className="wrapper">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-wrapper">
            <img src="#" alt="Фото профиля" className="profile__avatar"></img>
            <button
              onClick={props.onEditAvatar}
              type="button"
              className="profile__avatar-edit-button"
            ></button>
          </div>
          <div className="profile__wrapper">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                onClick={props.onEditProfile}
                type="button"
                className="profile__edit-btn opacity"
                aria-label="Редактировать профиль"
              ></button>
            </div>

            <p className="profile__status">Исследователь океана</p>
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
