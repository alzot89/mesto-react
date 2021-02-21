import { useState, useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const nameRef = useRef();
    const linkRef = useRef();
    const [error, setError] = useState({});
    const [validity, setValidity] = useState({})

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value
        })
    }

    useEffect(() => {
        if (isOpen) {
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
        }
    }, [isOpen])

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

    return (
        <PopupWithForm name='add' title='Новое место' button={isLoading ? 'Создание...' : 'Создать'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
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
        </PopupWithForm>
    )
}

export default AddPlacePopup