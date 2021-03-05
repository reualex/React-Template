import React, { FunctionComponent } from "react";
import "./styles.scss";

const Header: FunctionComponent<any> = (props) => {
  const isAuth: boolean = !!localStorage.getItem("authorization");

  const signIn = () => {
    console.log("Sign In");
  };

  const logout = () => {
    console.log("logout");
  };

  const _renderSignBlock = () => (
    <div className="header--auth-block--sign-in-btn" onClick={signIn}>
      Sign In
    </div>
  );

  const _renderLogoutButton = () => (
    <div className="header--sign-in-block--logout-btn" onClick={logout}>
      logout
    </div>
  );

  return (
    <React.Fragment>
      <div className="header">
        <div className="header--logo-block">
          <div className="header--logo-block-logo">Your logo</div>
          <label className="header--logo-block-label">label</label>
        </div>
        <div className="header--auth-block">
          {isAuth ? _renderLogoutButton() : _renderSignBlock()}
        </div>
      </div>
      {props.children}
    </React.Fragment>
  );
};

export default Header;
