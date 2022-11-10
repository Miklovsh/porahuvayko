import './App.css';
import Header from './Header';
import Context from './Context';
import FirstGroup from './Groups/FirstGroup';
import SecondGroup from './Groups/SecondGroup'
import ThirdGroup from './Groups/ThirdGroup';
import GeneralSystem from './Groups/GeneralSystem';
import Footer from './Footer';
import React, { createRef, useState } from 'react';

function App() {

  const [toggleState, setToggleState] = useState(1); // Стейт для інпутів з типом button які знаходяться в компоненті Header

  // Функція приймає аргумент індекс та передає його в метод setToggleState для зміни стейту 
  function toggleButton(index) {
    setToggleState(index); //метод примаймає індекс і на основі отриманого індексу змінює стейт toggleState
  }

  // Функція блокує можливість вводити в інпут всі символи крім 0-9 та крапка
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

  // Обєкт value, передається дочірним компонентам через Context.Provider
  const value = {
    toggleState,
    toggleButton,
    validateInput,
  }

  //Зміні значення яких пропсами передаються дочірнім компонентам  
  const esv = 1474; // ЄСВ - єдиний соціальний внесок. Ця зміна використовується для 1,2,3 групи.
  const general_esv = 22 // ЄСВ - єдиний соціальний внесок. Ця зміна використовується для підрахунку ЄСВ фопів які на загальні системі 
  const armyTax = 1.5 //  військовий збір, ця зміна використовується для підрахунку військового збору для фопів які на загальні системі

  return (
    <Context.Provider value={value}>
      <div className="App">
        <Header></Header>
        <main className='main'>
          <div className='main__container'>
            <h2 className="main__info">Дані актуальні з 1 січня 2022 року по 1 січня 2023 року</h2>
            <FirstGroup esv={esv} tax={248.10}></FirstGroup>
            <SecondGroup esv={esv} tax={1300}></SecondGroup>
            <ThirdGroup esv={esv} tax={5}></ThirdGroup>
            <GeneralSystem generalEsv={general_esv} tax={18} armyTax={armyTax}></GeneralSystem>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </Context.Provider>
  );
}

export default App;
