import React, { useContext, useState } from "react";
import Context from "../Context";

function ThirdGroup(props) {

  const value = useContext(Context);

  let inputMain = React.createRef();
  const [inputMainState, setInputMainState] = useState('');
  
  const [esvState, setEsvState] = useState('');
  const [taxState, setTaxState] = useState('');
  const [costState, setCostState] = useState('');
  const [receivedState, setReceivedState] = useState('');

  function changeInputMain() {
    setInputMainState(inputMain.current.value);
  }

  function count() {
    if (inputMainState.length > 0 && inputMainState.length < 11) {
      setEsvState(`${props.esv} гривень`);
      setTaxState(`${inputMain.current.value / 100 * props.tax} гривень`);
      setCostState(`${props.esv + (inputMain.current.value / 100 * props.tax)} гривень`);
      setReceivedState(`${inputMain.current.value - props.esv - (inputMain.current.value / 100 * props.tax)} гривень`);
    } else {
      alert('Поле "Сума для оподаткування:" не може бути пустим або містити більше 10 символів!');
    }
  }

  return (
    <div className="ThirdGroup">
      <div className={value.toggleState === 3 ? "main__content main__content-active" : "main__content"}>
        <h3 className='main__content-title'>Калькулятор податків для ФОП 3 група без ПДВ</h3>
        <p className='main__content-description'>Єдиний соціальний внесок - 1 474 гривень(22% від мінімальної зарплати). Єдиний податок - 5% від доходу або 3% + ПДВ</p>
        <label className='main__content-label'>Сума для оподаткування:</label><input className='main__content-input' onKeyPress={value.validateInput} onChange={changeInputMain} ref={inputMain} value={inputMainState} type="text" name='three-group' /><label className='main__content-value'>гривень</label>
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
        <input className='main__content-btn' onClick={count} type="button" value="Порахувати" />
      </div>
    </div>
  );
}

export default ThirdGroup;