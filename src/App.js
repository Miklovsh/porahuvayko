import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='header__container'>
          <div className='header__top'>
            <div className='header__logo-box'>
            <img className='header__logo' src={logo} />
            <h1 className="header__title">Порахувайко</h1>
            </div>
            <div className='header__input-box'>
            <input className="header__input-group header__input-active" type="button" value="1 група ФОП" />
          <input className="header__input-group" type="button" value="2 група ФОП" />
          <input className="header__input-group" type="button" value="3 група ФОП" />
          <input className="header__input-group" type="button" value="Загальна група ФОП" />
          </div>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='main__container'>
        <h2 className="main__info">Дані актуальні з 1 січня 2022 року по 1 січня 2023 року</h2>
          <div className='main__content'>
            <h3 className='main__content-title'>Калькулятор податків для ФОП 1 група</h3>
            <p className='main__content-description'>Єдиний соціальний внесок - 1 474 гривень(22% від мінімальної зарплати). Єдиний податок - 248 гривень 10 копійок(10% від прожиткового мінімуму станом на 1 січня)</p>
            <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' type="text" name='first-group' /><label className='main__content-value'>гривень</label>
            <div className='main__content-box'>
            <p className='main__content-out'>Єдиний соціальний внесок:</p>
            <p className='main__content-out'>Єдиний податок:</p>
            <p className='main__content-out'>Загальна сума податку:</p>
            <p className='main__content-out'>На руки отримаєте:</p>
            <input className='main__content-btn' type="button" value="Порахувати" />
          </div>
          </div>
          <div className='main__content hide'>
            <h3 className='main__content-title'>Калькулятор податків для ФОП 2 група</h3>
            <p className='main__content-description'>Єдиний соціальний внесок - 1 474 гривень(22% від мінімальної зарплати). Єдиний податок - 1 300 гривень(20% від мінімальної зарплати станом на 1 січня)</p>
            <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' type="text" name='second-group' /><label className='main__content-value'>гривень</label>
            <div className='main__content-box'>
            <p className='main__content-out'>Єдиний соціальний внесок:</p>
            <p className='main__content-out'>Єдиний податок:</p>
            <p className='main__content-out'>Загальна сума податку:</p>
            <p className='main__content-out'>На руки отримаєте:</p>
            <input className='main__content-btn' type="button" value="Порахувати" />
          </div>
          </div>
          <div className='main__content hide'>
            <h3 className='main__content-title'>Калькулятор податків для ФОП 3 група без ПДВ</h3>
            <p className='main__content-description'>Єдиний соціальний внесок - 1 474 гривень(22% від мінімальної зарплати). Єдиний податок - 5% від доходу або 3% + ПДВ</p>
            <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' type="text" name='three-group' /><label className='main__content-value'>гривень</label>
            <div className='main__content-box'>
            <p className='main__content-out'>Єдиний соціальний внесок:</p>
            <p className='main__content-out'>Єдиний податок:</p>
            <p className='main__content-out'>Загальна сума податку:</p>
            <p className='main__content-out'>На руки отримаєте:</p>
            <input className='main__content-btn' type="button" value="Порахувати" />
          </div>
          </div>
          <div className='main__content hide'>
            <h3 className='main__content-title'>Калькулятор податків для ФОПів які на загальній системі оподаткуванню</h3>
            <p className='main__content-description'>Єдиний соціальний внесок - 22%. Єдиний податок - 18%. Військовий збір - 1.5%</p>
            <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' type="text" name='general-group' /><label className='main__content-value'>гривень</label>
            <div className='main__content-box'>
            <p className='main__content-out'>Єдиний соціальний внесок:</p>
            <p className='main__content-out'>Єдиний податок:</p>
            <p className='main__content-out'>Військовий збір:</p>
            <p className='main__content-out'>Загальна сума податку:</p>
            <p className='main__content-out'>На руки отримаєте:</p>
            <input className='main__content-btn' type="button" value="Порахувати" />
            </div>
          </div>
        </div>
      </main>
      <footer className='footer'>
        <div className='footer__developer'>
          <p className='footer__developer-label'>Розробник - </p>
          <a className='footer__developer-name' href="https://www.instagram.com/miklovsh_viktor/" target="_blank">Мікловш Віктор</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
