import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  authenticated: boolean;
  handleNotAuthenticated: () => void;
}

const Header: FC<Props> = ({ authenticated, handleNotAuthenticated }) => {
  const _handleSignInClick = () => {
    window.open("http://localhost:4000/auth/twitter", "_self");
  };

  const _handleLogoutClick = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
    handleNotAuthenticated();
  }

  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      {authenticated ? (
        <li onClick={_handleLogoutClick}>Logout</li>
      ) : (
        <li onClick={_handleSignInClick}>Login</li>
      )}
    </ul>
  );
}

export default Header
