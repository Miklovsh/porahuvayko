import React, { useContext, useState } from "react";
import Context from "../Context";

function GeneralSystem(props) {

  const value = useContext(Context);

  let inputMain = React.createRef();
  const [inputMainState, setInputMainState] = useState('');
  
  const [esvState, setEsvState] = useState('');
  const [taxState, setTaxState] = useState('');
  const [vzState, setVzState] = useState(''); //vz - військовий збір. Стейт для поля Військовий збір, в полі Військовий збір виводиться результат податку на військовий збір
  const [costState, setCostState] = useState('');
  const [receivedState, setReceivedState] = useState('');

  function changeInputMain() {
    setInputMainState(inputMain.current.value);
  }

  function count() {
    if (inputMainState.length > 0 && inputMainState.length < 11) {
      setEsvState(`${inputMain.current.value / 100 * props.generalEsv} гривень`);
      setTaxState(`${inputMain.current.value / 100 * props.tax} гривень`);
      setVzState(`${inputMain.current.value / 100 * props.vz} гривень`);
      setCostState(`${inputMain.current.value / 100 * props.generalEsv + (inputMain.current.value / 100 * props.tax) + (inputMain.current.value / 100 * props.vz)} гривень`);
      setReceivedState(`${inputMain.current.value - (inputMain.current.value / 100 * props.generalEsv) - (inputMain.current.value / 100 * props.tax) - (inputMain.current.value / 100 * props.vz)} гривень`);
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
          <p className='main__content-out'>{vzState}</p>
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