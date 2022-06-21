function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  
  return (
    <li className="card">
      <button className="card__delete-btn" type="button"></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="card__image"
        onClick={handleClick}
        
      ></img>
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-wrapper">
          <button className="card__like-btn" type="button"></button>
          <span className="card__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
