import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  // const [selectedCard, setSelectedCard] = useState(0);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  // function handleCardClick() {
  //   setSelectedCard()
  // }

  function closeAllPopus() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    // setSelectedCard(0)
  }
  return (
    <div className="app">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
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
      <ImagePopup />
    </div >
  );
}

export default App;
