import React from 'react';
import styles from './Navbar.module.css';
import MainNavbar from './mainNavbar/MainNavbar';
import FloatPart from './floatPart/FloatPart';
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <MainNavbar />
      <FloatPart />
    </div>
  );
};

export default Navbar;
