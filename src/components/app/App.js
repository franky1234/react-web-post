import React from 'react';
import { Routes } from '../routes/index';
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="ui menu">
          <div className="item">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="item">
            <Link
                to={{
                  pathname: `/search`
                }}
              >
              Home
            </Link>
          </div>
        </div>
      </header>
      <section>
        <Routes />
      </section>
    </div>
  );
}

export default App;
