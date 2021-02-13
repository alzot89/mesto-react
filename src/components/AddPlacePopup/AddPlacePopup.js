import { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({ name, link })
    }

    function handleChange(e) {
        if (e.target.name === "name") {
            setName(e.target.value)
        } else {
            setLink(e.target.value)
        }
    }

    useEffect(() => {
        setName('');
        setLink('')
    }, [isOpen])

    return (
        <PopupWithForm name='add' title='Новое место' button={isLoading ? 'Создание...' : 'Создать'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
            children={
                <>
                    <div className="popup__input-container">
                        <input id="image-input" className="popup__input popup__input_type_image" type="text" name="name"
                            value={name} placeholder="Название" minLength="2" maxLength="30" required onChange={handleChange} />
                        <span id="image-input-error" className="error"></span>
                    </div>
                    <div className="popup__input-container">
                        <input id="link-input" className="popup__input popup__input_type_link" type="url" name="link" value={link}
                            placeholder="Ссылка на картинку" required onChange={handleChange} />
                        <span id="link-input-error" className="error"></span>
                    </div>
                </>
            }
        />
    )
}

export default AddPlacePopup