import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/api';
import Card from '../Card/Card'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setIsLoading(true);
        api.getCardsData()
            .then((data) => {
                setCards(data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

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
                        {cards.map((card) => { return (<Card card={card} key={card._id} onCardClick={onCardClick} />) })}
                    </ul>)}
            </section>
        </main >
    )
}

export default Main;