class Api {
    constructor({ address, token, groupId }) {
        this._address = address;
        this._token = token;
        this._groupId = groupId;
    }

    getCardsData() {
        return fetch(`${this._address}/${this._groupId}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    getUserData() {
        return fetch(`${this._address}/${this._groupId}/users/me`, {
            headers: {
                authorization: this._token
            }
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    changeUserData(data) {
        return fetch(`${this._address}/${this._groupId}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    changeAvatar(data) {
        return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data,
            })
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    setCardData(newCard) {
        return fetch(`${this._address}/${this._groupId}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link
            })
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    deleteCard(cardId) {
        return fetch(`${this._address}/${this._groupId}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (!isLiked) {
            return fetch(`${this._address}/${this._groupId}/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: {
                    authorization: this._token,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    return this._checkResponseStatus(res)
                })
        } else {
            return fetch(`${this._address}/${this._groupId}/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._token,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    return this._checkResponseStatus(res)
                })
        }
    }

    _checkResponseStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
    }
}

const config = {
    address: 'https://mesto.nomoreparties.co/v1',
    token: '94f8771a-5db3-4407-bf14-903dd1dba9af',
    groupId: 'cohort-19'
}

const api = new Api(config);

export default api

