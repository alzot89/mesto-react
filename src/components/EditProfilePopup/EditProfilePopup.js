import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name || '');
    const [description, setDescription] = useState(currentUser.about || '');

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }

    // function handleNameInputChange(e) {
    //     setName(e.target.value)
    // }

    // function handleDescriptionInputChange(e) {
    //     setDescription(e.target.value)
    // }

    function handleInputChange(e) {
        if (e.target.name === "name") {
            setName(e.target.value)
        } else {
            setDescription(e.target.value)
        }
    }

    return (
        <PopupWithForm name='edit' title='Редактировать профиль' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
            children={
                <>
                    <div className="popup__input-container">
                        <input id="name-input" className="popup__input popup__input_type_name" type="text" maxLength="40"
                            minLength="2" name="name" value={name} placeholder="Имя" required onChange={handleInputChange} />
                        <span id="name-input-error" className="error"></span>
                    </div>
                    <div className="popup__input-container">
                        <input id="about-input" className="popup__input popup__input_type_about" type="text" maxLength="200"
                            minLength="2" name="description" value={description} placeholder="О себе" required onChange={handleInputChange} />
                        <span id="about-input-error" className="error"></span>
                    </div>
                </>
            }
        />

    )
}

export default EditProfilePopup