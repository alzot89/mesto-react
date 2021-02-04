function ImagePopup(props) {
    return (
        <div className={`popup popup_type_image ${props.card && 'popup_opened'}`}>
            <div className="popup__container popup__container_type_image">
                <button className="button popup__close popup__close_type_image" type="button"
                    aria-label="кнопка: закрыть" onClick={props.onClose}></button>
                <img className="popup__image" src={props.card.link} alt={props.card.name} />
                <h3 className="popup__image-title">{props.card.name}</h3>
            </div>
        </div>
    )
}

export default ImagePopup