function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className={`popup__container popup__container_type_${props.name}`}>
                <button className={`button popup__close popup__close_type${props.name}`} type="button" aria-label="кнопка: закрыть" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_type_${props.name}`} name={props.name}>
                    {props.children}
                    <button className={`button popup__save popup__save_type_${props.name}`} aria-label="кнопка: Сохранить">Сохранить</button>
                </form>
            </div>
        </div>
        // <div className="popup popup_type_confirm">
        //     <div className="popup__container popup__container_type_confirm">
        //         <button className="button popup__close" type="button" aria-label="кнопка: подтвержение"></button>
        //         <h2 className="popup__title">Вы уверены?</h2>
        //         <form className="popup__form popup__form_type_confirm" name="form">
        //             <button className="button popup__save popup__save_type_confirm"
        //                 aria-label="кнопка: подтверждение">Да</button>
        //         </form>
        //     </div>
        // </div>
    )
}


export default PopupWithForm