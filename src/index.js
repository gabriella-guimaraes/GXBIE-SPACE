import About from './pages/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Design from './pages/Design';
import Edits from './pages/Edits';
import Home from './pages/Home'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/sobre" component={About} exact />
      <Route path="/design" component={Design} exact />
      <Route path="/edits" component={Edits} exact />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
