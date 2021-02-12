function PopupWithForm({ name, title, isOpen, onClose, children, onSubmit }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className={`popup__container popup__container_type_${name}`}>
                <button className={`button popup__close popup__close_type${name}`} type="button" aria-label="кнопка: закрыть" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_type_${name}`} name={name} onSubmit={onSubmit}>
                    {children}
                    <button className={`button popup__save popup__save_type_${name}`} aria-label="кнопка: Сохранить">Сохранить</button>
                </form>
            </div>
        </div>
    )
}


export default PopupWithForm