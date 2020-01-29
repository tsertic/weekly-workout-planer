import React from 'react';
import styles from './FloatPart.module.css';
import { Link } from 'react-router-dom';
const FloatPart = () => {
  return (
    <div className={styles.FloatPart}>
      <ul className={styles.floatNavigation}>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
      </ul>
    </div>
  );
};

export default FloatPart;
