import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LoginControl from './test.js';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {AppContainer} from "react-hot-loader";
import Route from "./router";

// ReactDOM.render(<LoginControl />, document.getElementById('example'));

const render = Component =>{
  ReactDOM.render(
    <AppContainer>
      <Component></Component>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Route);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
