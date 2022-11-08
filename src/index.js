import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const esv = 1474; // ЄСВ - єдиний соціальний внесок. Ця зміна використовується для 1,2,3 групи.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App esv={esv} taxFirstGroup={248.10} taxSecondGroup={1300} taxThirdGroup={5} />
  </React.StrictMode>
);


