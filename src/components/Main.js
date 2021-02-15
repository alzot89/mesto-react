import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, isLoading, onCardLike, onCardDelete }) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__image">
                    <div className="profile__overlay">
                        <button className="button button_type_avatar" type="button" aria-label="кнопка: редактировать" onClick={onEditAvatar}></button>
                    </div>
                    <img className="profile__avatar" src={currentUser.avatar} alt="картинка: аватарка" />
                </div>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button className="button button_type_edit" type="button" aria-label="кнопка: редактировать" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="button button_type_add" type="button" aria-label="кнопка: добавить" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                {isLoading
                    ? (<p style={{ color: 'white' }}>loading...</p>)
                    : (<ul className="elements__list">
                        {cards.map((card) => { return (<Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />) })}
                    </ul>)}
            </section>
        </main >
    )
}

export default Main;