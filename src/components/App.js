import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import ImagePopup from './ImagePopup';
import ConfirmPopup from './ConfirmPopup';
import { useState, useEffect } from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
    avatar: ''
  });
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getUserData(), api.getCardsData()])
      .then((data) => {
        setCurrentUser(data[0]);
        setCards(data[1])
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleCardDelete() {
    api.deleteCard(selectedCard._id)
      .then(() => {
        const newCards = cards.filter((c) => { return !(c._id === selectedCard._id) && c });
        setCards(newCards)
        closeAllPopus()
      })
      .catch((err) => {
        console.log(err)
      })
  }


  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true)
  }

  function handleUpdateUser(userData) {
    setIsLoading(true)
    api.changeUserData(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopus();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleUpdateAvatar(avatar) {
    setIsLoading(true)
    api.changeAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopus()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleAddPlaceSubmit(newCard) {
    setIsLoading(true)
    api.setCardData(newCard)
      .then((data) => {
        setCards([data, ...cards])
        closeAllPopus()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleConfirmDeletion(card) {
    setConfirmPopupOpen(true);
    setSelectedCard(card)
  }

  function closeAllPopus() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
    setImagePopupOpen(false);
    setConfirmPopupOpen(false)
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} isLoading={isLoading} cards={cards} onCardLike={handleCardLike} onCardDelete={handleConfirmDeletion} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopus} onUpdateUser={handleUpdateUser} isLoading={isLoading} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopus} onAddPlace={handleAddPlaceSubmit} isLoading={isLoading} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopus} onUpdateAvatar={handleUpdateAvatar} isLoading={isLoading} />
        <ConfirmPopup isOpen={isConfirmPopupOpen} onClose={closeAllPopus} onConfirmDeletion={handleCardDelete} />
        <ImagePopup card={selectedCard} onClose={closeAllPopus} isOpen={isImagePopupOpen} />
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;
