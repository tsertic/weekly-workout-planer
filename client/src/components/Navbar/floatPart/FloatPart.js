import React, { useContext, Fragment } from 'react';
import styles from './FloatPart.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';

const FloatPart = props => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, registerForm, loginForm } = authContext;

  const handleLogOut = () => {
    logout();
  };

  const handleChangeFormClick = e => {
    if (e.target.value === 'login') {
      loginForm();
    }
    if (e.target.value === 'signup') {
      registerForm();
    }
  };

  return (
    <div className={styles.FloatPart}>
      <ul className={styles.floatNavigation}>
        {isAuthenticated ? (
          <li onClick={handleLogOut}>Sign Out</li>
        ) : (
          <Fragment>
            <button
              className={styles.FloatPart__authBtn}
              onClick={handleChangeFormClick}
              value="login"
            >
              LogIn
            </button>
            <button
              className={styles.FloatPart__authBtn}
              onClick={handleChangeFormClick}
              value="signup"
            >
              SignUp
            </button>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

export default FloatPart;
