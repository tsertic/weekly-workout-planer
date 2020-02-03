import React from 'react';
import styles from './MainNavbar.module.css';
import WWP_Logo from './../../../assets/WWP_Logo.png';
const MainNavbar = () => {
  return (
    <div className={styles.MainNavbar}>
      <div className={styles.MainNavbar__logo}>
        <img src={WWP_Logo} alt="Weekly workout planner logo" />
      </div>
      <div className={styles.MainNavbar__quote}>
        <cite>
          ” Success usually comes to those who are too busy to be looking for
          it. „
        </cite>
      </div>
    </div>
  );
};

export default MainNavbar;
