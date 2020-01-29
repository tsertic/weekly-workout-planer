import React from 'react';
import styles from './Login.module.css';
const Login = props => {
  return (
    <div className={styles.Login}>
      <div className={styles.Login__info}>
        <p className={styles.Login__info__title}>Weekly Workout Planer</p>
        <p>App that helps you plan your workout day</p>
      </div>
      <div className={styles.Login__form}>
        <h1>LOGIN</h1>
        <form>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
