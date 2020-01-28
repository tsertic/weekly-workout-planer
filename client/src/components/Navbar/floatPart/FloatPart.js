import React from 'react';
import styles from './FloatPart.module.css';
import { Link } from 'react-router-dom';
const FloatPart = () => {
  return (
    <div className={styles.FloatPart}>
      <ul className={styles.floatNavigation}>
        <li>
          <Link to="/">LogIn</Link>
        </li>
        <li>
          <Link to="/">SignIn</Link>
        </li>
      </ul>
    </div>
  );
};

export default FloatPart;
