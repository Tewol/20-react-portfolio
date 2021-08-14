import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import app from './App';
//import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/nav';
import Footer from './components/Footer';


//const element = <h1> Welcome </h1>

//Console.log(element);

ReactDOM.render(<Footer/>, document.getElementById("root"));

//registerServiceWorker();










/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/