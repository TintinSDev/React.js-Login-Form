import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// document.addEventListener('DOMContentLoaded', () => {

// <span class="icon-close">
// <ion-icon name="close"></ion-icon> 
// </span>
// const wrapper = document.querySelector('.wrapper');
// const btnPopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');
// btnPopup.addEventListener('click', () => {
//     wrapper.classList.add('active-popup');
//     });
//     iconClose.addEventListener('click', () => {
//         wrapper.classList.remove('active-popup');
//     });
//   });
//     <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
