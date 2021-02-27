import { useEffect } from 'react'

function ImagePopup({ card, isOpen, onClose }) {

    function handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup')) { onClose() }
    }

    // eslint-disable-next-line
    useEffect(() => {
        if (isOpen) {
            const onKeypress = (evt) => {
                if (evt.key === 'Escape') {
                    onClose()
                }
            }
            document.addEventListener('keydown', onKeypress)
            return () => {
                document.removeEventListener('keydown', onKeypress)
            }
        }
    }, [isOpen])

    return (
        <div className={`popup popup_type_image ${isOpen && 'popup_opened'}`} onMouseDown={handleOverlayClose} >
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