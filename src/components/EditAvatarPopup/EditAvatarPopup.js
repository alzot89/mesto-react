import { useRef, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
    }

    function handleInputChange(e) {
        avatarRef.current.vaule = e.target.value
    }

    const popupIsOpen = isOpen === true;

    useEffect(() => {
        avatarRef.current.value = ''
    }, [popupIsOpen])

    return (
        <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
            children={
                <div className="popup__input-container">
                    <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" name="avatar"
                        placeholder="Ссылка на картинку" ref={avatarRef} required onChange={handleInputChange} />
                    <span id="avatar-input-error" className="error"></span>
                </div>
            }
        />
    )
}

export default EditAvatarPopup