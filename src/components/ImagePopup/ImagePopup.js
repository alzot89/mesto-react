function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__container popup__container_type_image">
                <button className="button popup__close popup__close_type_image" type="button"
                    aria-label="кнопка: закрыть"></button>
                <img className="popup__image" src="" alt="" />
                <h3 className="popup__image-title">жопа</h3>
            </div>
        </div>
    )
}

export default ImagePopup