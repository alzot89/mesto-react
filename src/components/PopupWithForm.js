import { useRef, useState, useEffect } from 'react'

function PopupWithForm({ name, title, button, isOpen, onClose, children, onSubmit }) {
    const [isFormValid, setFormValid] = useState(false)
    const formRef = useRef();
    // eslint-disable-next-line
    useEffect(() => {
        setFormValid(formRef.current.checkValidity())
    })

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className={`popup__container popup__container_type_${name}`}>
                <button className={`button popup__close popup__close_type${name}`} type="button" aria-label="кнопка: закрыть" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_type_${name}`} name={name} onSubmit={onSubmit} ref={formRef}>
                    {children}
                    <button className={`button popup__save popup__save_type_${name} ${!isFormValid && 'popup__save_invalid'}`} aria-label="кнопка: Сохранить">{button}</button>
                </form>
            </div>
        </div>
    )
}


export default PopupWithForm