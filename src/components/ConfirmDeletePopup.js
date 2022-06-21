import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup(props) {
  return (
    <PopupWithForm name="confirm-delete" title="Вы уверены?" buttonText="Да" isOpen={props.isOpen} onClose={props.onClose}>
    
    </PopupWithForm>
  );
}

export default ConfirmDeletePopup;
