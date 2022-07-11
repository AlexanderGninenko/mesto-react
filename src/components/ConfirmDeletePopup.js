import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup(props) {

  const handleSubmit =(e)=> {
    e.preventDefault();
    props.onCardDelete(props.card);
  }

  return (
    <PopupWithForm name="confirm-delete" title="Вы уверены?" buttonText="Да" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
    
    </PopupWithForm>
  );
}

export default ConfirmDeletePopup;
