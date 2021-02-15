function ImagePopup({ card, isOpen, onClose }) {
    return (
        <div className={`popup popup_type_image ${isOpen && 'popup_opened'}`}>
            <div className="popup__container popup__container_type_image">
                <button className="button popup__close popup__close_type_image" type="button"
                    aria-label="кнопка: закрыть" onClick={onClose}></button>
                <img className="popup__image" src={card.link} alt={card.name} />
                <h3 className="popup__image-title">{card.name}</h3>
            </div>
        </div>
    )
}

export default ImagePopup 