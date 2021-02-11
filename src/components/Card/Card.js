import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Card({ card, onCardClick }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="card">
            <button className={`button card__trash ${isOwn && 'card__trash_active'}`} type="button" aria-label="корзина"></button>
            <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="card__info">
                <h3 className="card__title">{card.name}</h3>
                <div className="card__like-container">
                    <button className="button card__like" type="button" aria-label="сердечко"></button>
                    <p className="card__like-amount">{!(card.likes.length === 0) && card.likes.length}</p>
                </div>
            </div>
        </li >
    )

}

export default Card