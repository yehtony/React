import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
//import P1 from './P1.js';
import reportWebVitals from './reportWebVitals';
//import { HashRouter, Route, Switch} from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
