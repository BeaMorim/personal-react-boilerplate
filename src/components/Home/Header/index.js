import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./style.less";
import axios from '../../../utils/axios/global-axios-default';

const request = () => {
  axios({
    method: 'get',
    url: '/alunos',
    baseURL: 'https://private-7d28c-educar2.apiary-mock.com',
  });
};

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
        <button onClick={request}>Make Request</button>
      </div>
    </header>
  );
};

export default Header;
