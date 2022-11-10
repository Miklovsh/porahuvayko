import React, { useContext, useState } from "react";
import Context from "../Context";

function FirstGroup(props) {

  const value = useContext(Context); // дістав обєкт value який передав за допомогою Context.Provider з батьківського компоненту App

  let inputMain = React.createRef(); // створення нового ref
  const [inputMainState, setInputMainState] = useState(''); // Стейт для інпупа куди буде вводитися сума яку потрібно порахувати
  
  const [esvState, setEsvState] = useState(''); //ЄСВ - єдиний соціальний внесок. Стейт для поля Єдиний соціальний внесок, в полі Єдиний соціальний внесок виводиться результат податку ЄСВ
  const [taxState, setTaxState] = useState(''); //Стейт для поля єдиний податок, в полі єдиний податок виводяться результати єдиного податку
  const [costState, setCostState] = useState(''); // Стейт для поля Загальна сума, в полі загальна сума виводиться результат суми всіх податків
  const [receivedState, setReceivedState] = useState(''); // Стейт для поля  На руки, в полі На руки виводиться сума яка залишиться після сплати податків

  //Функція містить метод стейту inputMainState, метод приймає з атрибуту ref змінене значення в властивості current та записує результат в стейт inputMainState
  function changeInputMain() {
    setInputMainState(inputMain.current.value);
  }

// Якщо виконується умова то функція count в методах стейтів виконує обчислення, а результати записує в стейт
  function count() {
    if (inputMainState.length > 0 && inputMainState.length < 11) {
      setEsvState(`${props.esv} гривень`);
      setTaxState(`${props.tax} гривень`);
      setCostState(`${props.esv + props.tax} гривень`);
      setReceivedState(`${inputMain.current.value - props.esv - props.tax} гривень`);
    } else {
      alert('Поле "Сума для оподаткування:" не може бути пустим або містити більше 10 символів!');
    }
  }

  return (
    <div className="FirstGroup">
      <div className={value.toggleState === 1 ? "main__content main__content-active" : "main__content"}>
        <h3 className='main__content-title'>Калькулятор податків для ФОП 1 група</h3>
        <p className='main__content-description'>Єдиний соціальний внесок - 1 474 гривень(22% від мінімальної зарплати). Єдиний податок - 248 гривень 10 копійок(10% від прожиткового мінімуму станом на 1 січня)</p>
        <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' onKeyPress={value.validateInput} onChange={changeInputMain} ref={inputMain} value={inputMainState} type="number" name='first-group' /><label className='main__content-value'>гривень</label>
        <div className='main__content-box'>
          <p className='main__content-out'>Єдиний соціальний внесок:</p>
          <p className='main__content-out'>{esvState}</p>
        </div>
        <div className='main__content-box'>
          <p className='main__content-out'>Єдиний податок:</p>
          <p className='main__content-out'>{taxState}</p>
        </div>
        <div className='main__content-box'>
          <p className='main__content-out'>Загальна сума податку:</p>
          <p className='main__content-out red'>{costState}</p>
        </div>
        <div className='main__content-box'>
          <p className='main__content-out'>На руки отримаєте:</p>
          <p className='main__content-out green'>{receivedState}</p>
        </div>
        <input className='main__content-btn' type="button" onClick={count} value="Порахувати" />
      </div>
    </div>
  );
}

export default FirstGroup;