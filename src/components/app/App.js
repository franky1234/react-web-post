import React from 'react';
import { Routes } from '../routes/index';
import logo from '../../img/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="ui menu">
          <div className="item">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="item">Home</div>
        </div>
      </header>
      <section>
        <Routes />
      </section>
    </div>
  );
}

export default App;
