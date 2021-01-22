import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import style from './index.css'
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App className={style} />
  </BrowserRouter>,
  document.getElementById('root')
);


