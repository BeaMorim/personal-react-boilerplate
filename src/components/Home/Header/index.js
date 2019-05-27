import React from "react";
import logo from "@/assets/images/logo.svg";
import "./style.less";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { createStructuredSelector } from "reselect";
import { fooActions, fooSelectors } from "@/state/ducks/home";
import { Button } from "antd";

const Header = ({ actions, loading }) => {
  const request = () => {
    actions.loadFoo({ page: 1 });
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
        <Button onClick={request} loading={loading}>
          Make Request
        </Button>
      </div>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: fooSelectors.selectIsLoading()
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(fooActions, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Header);
