import React, { useContext, useEffect, useState } from 'react';
import styles from './Auth.module.css';
//components
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
//context
import AuthContext from '../../context/auth/authContext';

const AuthPage = props => {
  //context
  const authContext = useContext(AuthContext);
  const {
    login,
    register,
    isAuthenticated,
    loadUser,
    currentAuthForm
  } = authContext;

  //effect
  //if it is auth then redirect to home page
  useEffect(() => {
    loadUser();
    if (isAuthenticated) {
      props.history.push('/');
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  //states
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

  //functions
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
      <div className={styles.AuthPage__content}>
        <p className={styles.AuthPage__title}>Weekly Workout Planner</p>
        <div className={styles.AuthPage__description}>
          <div className={styles.AuthPage__description__text}>
            <li>Plan your Weekly workouts</li>
            <li>Easy adding,removing and tracking</li>
            <li>Never be lost again</li>
          </div>
          <div className={styles.AuthPage__description__gallery}></div>
        </div>
        <div className={styles.AuthPage__img}></div>
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
