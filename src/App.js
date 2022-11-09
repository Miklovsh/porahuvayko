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

  const [toggleState, setToggleState] = useState(1);

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

  const value = {
    toggleState,
    toggleButton,
    validateInput,
  }

  const esv = 1474; // ЄСВ - єдиний соціальний внесок. Ця зміна використовується для 1,2,3 групи.
  const general_esv = 22 // ЄСВ - єдиний соціальний внесок. Ця зміна використовується для підрахунку ЄСВ фопів які на загальні системі 
  const vz = 1.5 // vz - військовий збір, ця зміна використовується для підрахунку військового збору для фопів які на загальні системі
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
            <GeneralSystem generalEsv={general_esv} tax={18} vz={vz}></GeneralSystem>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </Context.Provider>
  );
}

export default App;
