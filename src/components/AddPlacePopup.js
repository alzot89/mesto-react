import { useState, useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const nameRef = useRef();
    const linkRef = useRef();
    const [error, setError] = useState({});
    const [validity, setValidity] = useState({
        name: true,
        link: true
    })

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value
        })
    }

    function handleChange(e) {
        const name = e.target.name
        setError((prevValue) => {
            return {
                ...prevValue,
                [name]: e.target.validationMessage
            }
        })
        setValidity((prevValue) => {
            return {
                ...prevValue,
                [name]: e.target.validity.valid
            }
        })
    }

    useEffect(() => {
        nameRef.current.value = '';
        linkRef.current.value = ''
        setError((prevValue) => {
            return {
                ...prevValue,
                name: '',
                link: ''
            }
        })
        setValidity((prevValue) => {
            return {
                ...prevValue,
                name: true,
                link: true
            }
        })
    }, [isOpen])

    return (
        <PopupWithForm name='add' title='Новое место' button={isLoading ? 'Создание...' : 'Создать'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
            children={
                <>
                    <div className="popup__input-container">
                        <input id="image-input" className={`popup__input popup__input_type_image ${!validity.name && 'popup__input_state_invalid'} `} type="text" name="name"
                            ref={nameRef} placeholder="Название" minLength="2" maxLength="30" required onChange={handleChange} />
                        <span id="image-input-error" className="error">{error.name}</span>
                    </div>
                    <div className="popup__input-container">
                        <input id="link-input" className={`popup__input popup__input_type_link ${!validity.link && 'popup__input_state_invalid'} `} type="url" name="link" ref={linkRef}
                            placeholder="Ссылка на картинку" required onChange={handleChange} />
                        <span id="link-input-error" className="error">{error.link}</span>
                    </div>
                </>
            }
        />
    )
}

export default AddPlacePopup