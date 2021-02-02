import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_edit">
        <div className="popup__container popup__container_type_edit">
          <button className="button popup__close" type="button" aria-label="кнопка: закрыть"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_type_edit" name="form">
            <div className="popup__input-container">
              <input id="name-input" className="popup__input popup__input_type_name" type="text" maxLength="40"
                minLength="2" name="name" value="" placeholder="Имя" required />
              <span id="name-input-error" className="error"></span>
            </div>
            <div className="popup__input-container">
              <input id="about-input" className="popup__input popup__input_type_about" type="text" maxLength="200"
                minLength="2" name="about" value="" placeholder="О себе" required />
              <span id="about-input-error" className="error"></span>
            </div>
            <button className="button popup__save" aria-label="кнопка: Сохранить">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add">
        <div className="popup__container popup__container_type_add">
          <button className="button popup__close popup__close_type_add" type="button"
            aria-label="кнопка: закрыть"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form popup__form_type_add" name="form">
            <div className="popup__input-container">
              <input id="image-input" className="popup__input popup__input_type_image" type="text" name="name"
                value="" placeholder="Название" minLength="2" maxLength="30" required />
              <span id="image-input-error" className="error"></span>
            </div>
            <div className="popup__input-container">
              <input id="link-input" className="popup__input popup__input_type_link" type="url" name="link" value=""
                placeholder="Ссылка на картинку" required />
              <span id="link-input-error" className="error"></span>
            </div>
            <button className="button popup__save popup__save_type_add" aria-label="кнопка: Создать">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <button className="button popup__close popup__close_type_image" type="button"
            aria-label="кнопка: закрыть"></button>
          <img className="popup__image" src=" " alt=" " />
          <h3 className="popup__image-title">жопа</h3>
        </div>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container popup__container_type_confirm">
          <button className="button popup__close" type="button" aria-label="кнопка: подтвержение"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form_type_confirm" name="form">
            <button className="button popup__save popup__save_type_confirm"
              aria-label="кнопка: подтверждение">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container popup__container_type_add">
          <button className="button popup__close popup__close_type_add" type="button"
            aria-label="кнопка: закрыть"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_type_avatar" name="form">
            <div className="popup__input-container">
              <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" name="avatar"
                value="" placeholder="Ссылка на картинку" required />
              <span id="avatar-input-error" className="error"></span>
            </div>
            <button className="button popup__save popup__save_type_add"
              aria-label="кнопка: Сохранить">Сохранить</button>
          </form>
        </div>
      </div>

      <template id="template-card">
        <li className="card">
          <button className="button card__trash" type="button" aria-label="корзина"></button>
          <img className="card__image" src=" " alt=" " />
          <div className="card__info">
            <h3 className="card__title">жопа</h3>
            <div className="card__like-container">
              <button className="button card__like" type="button" aria-label="сердечко"></button>
              <p className="card__like-amount"></p>
            </div>
          </div>
        </li>
      </template>
    </div >
  );
}

export default App;
