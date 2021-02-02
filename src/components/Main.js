import React from 'react'

function Main() {
    return (
        <main className="content">

            <section className="profile">
                <div className="profile__image">
                    <div className="profile__overlay">
                        <button className="button button_type_avatar" type="button" aria-label="кнопка: редактировать"></button>
                    </div>
                    <img className="profile__avatar" src=" " alt="картинка: аватарка" />
                </div>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__title">Сашка Зотов</h1>
                        <button className="button button_type_edit" type="button" aria-label="кнопка: редактировать"></button>
                    </div>
                    <p className="profile__subtitle">будущий разработчик</p>
                </div>
                <button className="button button_type_add" type="button" aria-label="кнопка: добавить"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>

        </main>
    )
}

export default Main;