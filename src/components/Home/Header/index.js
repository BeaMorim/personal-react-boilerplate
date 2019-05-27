import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./style.less";
import { connect } from 'react-redux';
import { loadFoo } from '../../../state/ducks/home/actions';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from '../../../state/ducks/home/selectors';
import { Button } from 'antd';

const Header = ({action, loading}) => {
  const request = () => {
    action({ page: 1});
  };

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
        <Button onClick={request} loading={loading}>Make Request</Button>
      </div>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsLoading(),
});

const mapDispatchToProps = dispatch => ({
  action: params => dispatch(loadFoo(params))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(Header);
