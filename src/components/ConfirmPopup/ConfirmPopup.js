import PopupWithForm from '../PopupWithForm/PopupWithForm';

function ConfirmPopup({ isOpen, onClose, onConfirmDeletion }) {

    function handleSubmit(e) {
        e.preventDefault();
        onConfirmDeletion();
    }

    return (
        <PopupWithForm name='confirm' title='Вы уверены ?' button='Да' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} />
    )
}

export default ConfirmPopup