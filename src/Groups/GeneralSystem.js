import React, { useContext, useState } from "react";
import Context from "../Context";

function GeneralSystem(props) {

  const value = useContext(Context); // дістав обєкт value який передав за допомогою Context.Provider з батьківського компоненту App

  let inputMain = React.createRef(); // створення нового ref
  const [inputMainState, setInputMainState] = useState(''); // Стейт для інпупа куди буде вводитися сума яку потрібно порахувати
  
  const [esvState, setEsvState] = useState(''); //ЄСВ - єдиний соціальний внесок. Стейт для поля Єдиний соціальний внесок, в полі Єдиний соціальний внесок виводиться результат податку ЄСВ
  const [taxState, setTaxState] = useState(''); //Стейт для поля єдиний податок, в полі єдиний податок виводяться результати єдиного податку
  const [armyState, setArmyState] = useState(''); // військовий збір. Стейт для поля Військовий збір, в полі Військовий збір виводиться результат податку на військовий збір
  const [costState, setCostState] = useState(''); // Стейт для поля Загальна сума, в полі загальна сума виводиться результат суми всіх податків
  const [receivedState, setReceivedState] = useState(''); // Стейт для поля  На руки, в полі На руки виводиться сума яка залишиться після сплати податків

  //Функція містить метод стейту inputMainState, метод приймає з атрибуту ref змінене значення в властивості current та записує результат в стейт inputMainState
  function changeInputMain() {
    setInputMainState(inputMain.current.value);
  }


// Якщо виконується умова то функція count в методах стейтів виконує обчислення, а результати записує в стейт
  function count() {
    if (inputMainState.length > 0 && inputMainState.length < 11) {
      setEsvState(`${inputMain.current.value / 100 * props.generalEsv} гривень`);
      setTaxState(`${inputMain.current.value / 100 * props.tax} гривень`);
      setArmyState(`${inputMain.current.value / 100 * props.armyTax} гривень`);
      setCostState(`${inputMain.current.value / 100 * props.generalEsv + (inputMain.current.value / 100 * props.tax) + (inputMain.current.value / 100 * props.armyTax)} гривень`);
      setReceivedState(`${inputMain.current.value - (inputMain.current.value / 100 * props.generalEsv) - (inputMain.current.value / 100 * props.tax) - (inputMain.current.value / 100 * props.armyTax)} гривень`);
    } else {
      alert('Поле "Сума для оподаткування:" не може бути пустим або містити більше 10 символів!');
    }
  }

  return (
    <div className="GeneralSystem">
      <div className={value.toggleState === 4 ? "main__content main__content-active" : "main__content"}>
        <h3 className='main__content-title'>Калькулятор податків для ФОПів які на загальній системі оподаткуванню</h3>
        <p className='main__content-description'>Єдиний соціальний внесок - 22%. Єдиний податок - 18%. Військовий збір - 1.5%</p>
        <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' onKeyPress={value.validateInput} onChange={changeInputMain} ref={inputMain} value={inputMainState} type="text" name='general-group' /><label className='main__content-value'>гривень</label>
        <div className='main__content-box'>
          <p className='main__content-out'>Єдиний соціальний внесок:</p>
          <p className='main__content-out'>{esvState}</p>
        </div>
        <div className='main__content-box'>
          <p className='main__content-out'>Єдиний податок:</p>
          <p className='main__content-out'>{taxState}</p>
        </div>
        <div className='main__content-box'>
          <p className='main__content-out'>Військовий збір:</p>
          <p className='main__content-out'>{armyState}</p>
        </div>
        <div className='main__content-box'>
          <p className='main__content-out'>Загальна сума податку:</p>
          <p className='main__content-out red'>{costState}</p>
        </div>
        <div className='main__content-box'>
          <p className='main__content-out'>На руки отримаєте:</p>
          <p className='main__content-out green'>{receivedState}</p>
        </div>
        <input className='main__content-btn' onClick={count} type="button" value="Порахувати" />
      </div>
    </div>
  );
}

export default GeneralSystem;