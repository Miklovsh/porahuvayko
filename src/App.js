import React, { createRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {

  const [toggleState, setToggleState] = useState(1);

  let firstGroupInput = React.createRef();
  const [firstGroupInputState, setFirstGroupInputState] = useState('');
  const [esvFirstGroupState, setEsvFirstGroupState] = useState(''); 
  const [taxFirstGroupState, setTaxFirstGroupState] = useState('');
  const [costFirstGroupState, setCostFirstGroupState] = useState('');
  const [receivedFirstGroupState, setReceivedFirstGroupState] = useState('');

  let secondGroupInput = React.createRef();
  const [secondGroupInputState, setSecondGroupInputState] = useState(''); 
  const [esvSecondGroupState, setEsvSecondGroupState] = useState(''); 
  const [taxSecondGroupState, setTaxSecondGroupState] = useState('');
  const [costSecondGroupState, setCostSecondGroupState] = useState('');
  const [receivedSecondGroupState, setReceivedSecondGroupState] = useState('');


  function toggleButton(index) {
    setToggleState(index);
  }

  function validateInput(e) {
    let theEvent = e || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  function changeFirstGroupInput() {
    setFirstGroupInputState(firstGroupInput.current.value);
  }

  function countFirstGroup() {
    if (firstGroupInputState.length > 0 && firstGroupInputState.length < 11) {
      setEsvFirstGroupState(`${props.esv} гривень`);
      setTaxFirstGroupState(`${props.taxFirstGroup} гривень`);
      setCostFirstGroupState(`${props.esv + props.taxFirstGroup} гривень`);
      setReceivedFirstGroupState(`${firstGroupInput.current.value - props.esv - props.taxFirstGroup} гривень`);
    } else {
      alert('Поле "Сума для оподаткування:" не може бути пустим або містити більше 10 символів!');
    }
  }

  function changeSecondGroupInput(){
    setSecondGroupInputState(secondGroupInput.current.value);
  }

  function countSecondGroup() {
if(secondGroupInputState.length > 0 && secondGroupInputState.length < 11){
  setEsvSecondGroupState(`${props.esv} гривень`);
  setTaxSecondGroupState(`${props.taxSecondGroup} гривень`);
  setCostSecondGroupState(`${props.esv + props.taxSecondGroup} гривень`);
  setReceivedSecondGroupState(`${secondGroupInput.current.value - props.esv - props.taxSecondGroup} гривень`)
} else {
  alert('Поле "Сума для оподаткування:" не може бути пустим або містити більше 10 символів!');
}
  }

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
              <input className={toggleState === 1 ? "header__input-group header__input-active" : "header__input-group"} type="button" onClick={() => toggleButton(1)} value="ФОП 1 група" />
              <input className={toggleState === 2 ? "header__input-group header__input-active" : "header__input-group"} type="button" onClick={() => toggleButton(2)} value="ФОП 2 група" />
              <input className={toggleState === 3 ? "header__input-group header__input-active" : "header__input-group"} type="button" onClick={() => toggleButton(3)} value="ФОП 3 група" />
              <input className={toggleState === 4 ? "header__input-group header__input-active" : "header__input-group"} type="button" onClick={() => toggleButton(4)} value="ФОП загальна система" />
            </div>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='main__container'>
          <h2 className="main__info">Дані актуальні з 1 січня 2022 року по 1 січня 2023 року</h2>
          <div className={toggleState === 1 ? "main__content main__content-active" : "main__content"}>
            <h3 className='main__content-title'>Калькулятор податків для ФОП 1 група</h3>
            <p className='main__content-description'>Єдиний соціальний внесок - 1 474 гривень(22% від мінімальної зарплати). Єдиний податок - 248 гривень 10 копійок(10% від прожиткового мінімуму станом на 1 січня)</p>
            <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' onKeyPress={validateInput} onChange={changeFirstGroupInput} ref={firstGroupInput} value={firstGroupInputState} type="number" name='first-group' /><label className='main__content-value'>гривень</label>
            <div className='main__content-box'>
              <p className='main__content-out'>Єдиний соціальний внесок:</p>
              <p className='main__content-out'>{esvFirstGroupState}</p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>Єдиний податок:</p>
              <p className='main__content-out'>{taxFirstGroupState}</p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>Загальна сума податку:</p>
              <p className='main__content-out red'>{costFirstGroupState}</p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>На руки отримаєте:</p>
              <p className='main__content-out green'>{receivedFirstGroupState}</p>
            </div>
            <input className='main__content-btn' type="button" onClick={countFirstGroup} value="Порахувати" />
          </div>
          <div className={toggleState === 2 ? "main__content main__content-active" : "main__content"}>
            <h3 className='main__content-title'>Калькулятор податків для ФОП 2 група</h3>
            <p className='main__content-description'>Єдиний соціальний внесок - 1 474 гривень(22% від мінімальної зарплати). Єдиний податок - 1 300 гривень(20% від мінімальної зарплати станом на 1 січня)</p>
            <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' onKeyPress={validateInput} onChange={changeSecondGroupInput} ref={secondGroupInput} value={secondGroupInputState} type="text" name='second-group' /><label className='main__content-value'>гривень</label>
            <div className='main__content-box'>
              <p className='main__content-out'>Єдиний соціальний внесок:</p>
              <p className='main__content-out'>{esvSecondGroupState}</p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>Єдиний податок:</p>
              <p className='main__content-out'>{taxSecondGroupState}</p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>Загальна сума податку:</p>
              <p className='main__content-out red'>{costSecondGroupState}</p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>На руки отримаєте:</p>
              <p className='main__content-out green'>{receivedSecondGroupState}</p>
            </div>
            <input className='main__content-btn' onClick={countSecondGroup} type="button" value="Порахувати" />
          </div>
          <div className={toggleState === 3 ? "main__content main__content-active" : "main__content"}>
            <h3 className='main__content-title'>Калькулятор податків для ФОП 3 група без ПДВ</h3>
            <p className='main__content-description'>Єдиний соціальний внесок - 1 474 гривень(22% від мінімальної зарплати). Єдиний податок - 5% від доходу або 3% + ПДВ</p>
            <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' type="text" name='three-group' /><label className='main__content-value'>гривень</label>
            <div className='main__content-box'>
              <p className='main__content-out'>Єдиний соціальний внесок:</p>
              <p className='main__content-out'></p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>Єдиний податок:</p>
              <p className='main__content-out'></p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>Загальна сума податку:</p>
              <p className='main__content-out red'></p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>На руки отримаєте:</p>
              <p className='main__content-out green'></p>
            </div>
            <input className='main__content-btn' type="button" value="Порахувати" />
          </div>
          <div className={toggleState === 4 ? "main__content main__content-active" : "main__content"}>
            <h3 className='main__content-title'>Калькулятор податків для ФОПів які на загальній системі оподаткуванню</h3>
            <p className='main__content-description'>Єдиний соціальний внесок - 22%. Єдиний податок - 18%. Військовий збір - 1.5%</p>
            <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' type="text" name='general-group' /><label className='main__content-value'>гривень</label>
            <div className='main__content-box'>
              <p className='main__content-out'>Єдиний соціальний внесок:</p>
              <p className='main__content-out'></p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>Єдиний податок:</p>
              <p className='main__content-out'></p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>Військовий збір:</p>
              <p className='main__content-out'></p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>Загальна сума податку:</p>
              <p className='main__content-out red'></p>
            </div>
            <div className='main__content-box'>
              <p className='main__content-out'>На руки отримаєте:</p>
              <p className='main__content-out green'></p>
            </div>
            <input className='main__content-btn' type="button" value="Порахувати" />
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
