import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import Profile from './Profile';
import Survey from './Survey';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/myProfile" component={Profile} />
        <Route exact path="/survey" component={Survey} />
      </Switch>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
