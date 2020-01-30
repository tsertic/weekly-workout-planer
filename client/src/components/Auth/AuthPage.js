import React, { useContext, useEffect, useState } from 'react';
import styles from './Auth.module.css';
import AuthContext from '../../context/auth/authContext';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

const AuthPage = props => {
  const authContext = useContext(AuthContext);
  const {
    login,
    register,
    isAuthenticated,
    loadUser,
    currentAuthForm
  } = authContext;

  //if it is auth then redirect to home page
  useEffect(() => {
    loadUser();
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [signupInfo, setRegisterInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onInputChange = e => {
    if (currentAuthForm === 'login') {
      setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    } else if (currentAuthForm === 'register') {
      setRegisterInfo({ ...signupInfo, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (currentAuthForm === 'login') {
      const { email, password } = loginInfo;
      login({
        email,
        password
      });
    }
    if (currentAuthForm === 'register') {
      const { name, email, password, confirmPassword } = signupInfo;
      if (password === confirmPassword) {
        register({
          name,
          email,
          password
        });
      }
    }
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
        {currentAuthForm === 'login' ? (
          <Login
            handleSubmit={handleSubmit}
            onInputChange={onInputChange}
            loginInfo={loginInfo}
          />
        ) : (
          <SignUp
            handleSubmit={handleSubmit}
            onInputChange={onInputChange}
            signupInfo={signupInfo}
          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
