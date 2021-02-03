import { useState, useEffect } from 'react';
import api from '../../utils/api';
import Card from '../Card/Card'

function Main(props) {

    const [userName, setUserName] = useState(' ');
    const [userDescription, setUserDescription] = useState(' ');
    const [userAvatar, setUserAvatar] = useState(' ');
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUserData(), api.getCardsData()])
            .then((data) => {
                setUserName(data[0].name);
                setUserDescription(data[0].about);
                setUserAvatar(data[0].avatar);
                setCards(data[1])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__image">
                    <div className="profile__overlay">
                        <button className="button button_type_avatar" type="button" aria-label="кнопка: редактировать" onClick={props.onEditAvatar}></button>
                    </div>
                    <img className="profile__avatar" src={userAvatar} alt="картинка: аватарка" />
                </div>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="button button_type_edit" type="button" aria-label="кнопка: редактировать" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="button button_type_add" type="button" aria-label="кнопка: добавить" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => { return (<Card card={card} key={card._id} />) })}
                </ul>
            </section>

        </main>
    )
}

export default Main;