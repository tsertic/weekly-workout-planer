import React from 'react';
import styles from './MainNavbar.module.css';
import { Link } from 'react-router-dom';
const MainNavbar = () => {
  return (
    <div className={styles.MainNavbar}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.mainNavigation}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNavbar;
