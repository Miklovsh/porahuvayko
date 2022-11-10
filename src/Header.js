import React, { useContext } from "react";
import logo from './logo.svg';
import Context from './Context';

function Header() {

  const value = useContext(Context);  // дістав обєкт value який передав за допомогою Context.Provider з батьківського компоненту App

  return (
    <div className="Header">
      <header className="header">
        <div className='header__container'>
          <div className='header__top'>
            <div className='header__logo-box'>
              <img className='header__logo' src={logo} />
              <h1 className="header__title">Порахувайко</h1>
            </div>
            <div className='header__input-box'>
              <input className={value.toggleState === 1 ? "header__input-group header__input-active" : "header__input-group"} type="button" onClick={() => value.toggleButton(1)} value="ФОП 1 група" />
              <input className={value.toggleState === 2 ? "header__input-group header__input-active" : "header__input-group"} type="button" onClick={() => value.toggleButton(2)} value="ФОП 2 група" />
              <input className={value.toggleState === 3 ? "header__input-group header__input-active" : "header__input-group"} type="button" onClick={() => value.toggleButton(3)} value="ФОП 3 група" />
              <input className={value.toggleState === 4 ? "header__input-group header__input-active" : "header__input-group"} type="button" onClick={() => value.toggleButton(4)} value="ФОП загальна система" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;