import React from "react";
import logo from '../../../assets/images/logo.svg';
import './style.less';

const Header = () => {
  return (
    <header className="header">
      <div className="header-section">
        <img src={logo} className="header-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </header>
  );
};

export default Header;
