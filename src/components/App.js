import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';
import { useState, useEffect } from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserData()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


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

  function closeAllPopus() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
    setImagePopupOpen(false);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name='edit' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopus}
          children={
            <>
              <div className="popup__input-container">
                <input id="name-input" className="popup__input popup__input_type_name" type="text" maxLength="40"
                  minLength="2" name="name" value="" placeholder="Имя" required readOnly />
                <span id="name-input-error" className="error"></span>
              </div>
              <div className="popup__input-container">
                <input id="about-input" className="popup__input popup__input_type_about" type="text" maxLength="200"
                  minLength="2" name="about" value="" placeholder="О себе" required readOnly />
                <span id="about-input-error" className="error"></span>
              </div>
            </>
          }
        />
        <PopupWithForm name='add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopus}
          children={
            <>
              <div className="popup__input-container">
                <input id="image-input" className="popup__input popup__input_type_image" type="text" name="name"
                  value="" placeholder="Название" minLength="2" maxLength="30" required readOnly />
                <span id="image-input-error" className="error"></span>
              </div>
              <div className="popup__input-container">
                <input id="link-input" className="popup__input popup__input_type_link" type="url" name="link" value=""
                  placeholder="Ссылка на картинку" required readOnly />
                <span id="link-input-error" className="error"></span>
              </div>
            </>
          }
        />
        <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopus}
          children={
            <div className="popup__input-container">
              <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" name="avatar"
                value="" placeholder="Ссылка на картинку" required readOnly />
              <span id="avatar-input-error" className="error"></span>
            </div>
          }
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopus} isOpen={isImagePopupOpen} />
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;
