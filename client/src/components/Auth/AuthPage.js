import React, { useContext } from 'react';
import styles from './Auth.module.css';
import AuthContext from '../../context/auth/authContext';

const AuthPage = props => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;
  const handleSubmit = e => {
    e.preventDefault();

    login({
      email: 'test@test.com',
      password: '123456'
    });
  };

  return (
    <div className={styles.AuthPage}>
      <div className={styles.AuthPage__info}>
        <p className={styles.AuthPage__info__title}>Weekly Workout Planer</p>
        <div className={styles.AuthPage__info__description}>
          <div className={styles.AuthPage__info__description__text}>
            <li>Plan your Weekly workouts</li>
            <li>Easy adding,removing and tracking</li>
            <li>Never be lost again</li>
          </div>
          <div className={styles.AuthPage__info__description__gallery}></div>
        </div>
        <div className={styles.AuthPage__info__img}></div>
      </div>
      <div className={styles.AuthPage__form}>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
