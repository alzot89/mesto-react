function Card(props) {

    // function handleClick() {
    //     props.onCardClick(card);
    // }

    return (
        <li className="card">
            <button className="button card__trash" type="button" aria-label="корзина"></button>
            <img className="card__image" src={props.card.link} alt={props.card.name} />
            <div className="card__info">
                <h3 className="card__title">{props.card.name}</h3>
                <div className="card__like-container">
                    <button className="button card__like" type="button" aria-label="сердечко"></button>
                    <p className="card__like-amount">{!(props.card.likes.length === 0) && props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )

}

export default Card