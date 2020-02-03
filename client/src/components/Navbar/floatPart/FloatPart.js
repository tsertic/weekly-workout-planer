import React, { useContext, Fragment } from 'react';
import styles from './FloatPart.module.css';
import AuthContext from '../../../context/auth/authContext';

const FloatPart = props => {
  //context
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, registerForm, loginForm } = authContext;

  //functions
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
      <ul className={styles.FloatPart__navigation}>
        {isAuthenticated ? (
          <button className={styles.FloatPart__authBtn} onClick={handleLogOut}>
            Sign Out
          </button>
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
