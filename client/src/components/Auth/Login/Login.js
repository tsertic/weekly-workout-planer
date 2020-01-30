import React from 'react';
import styles from './Login.module.css';
const Login = props => {
  const { loginInfo, handleSubmit, onInputChange } = props;
  return (
    <div className={styles.Login}>
      <h1 className={styles.Login__title}>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.Login__inputBox}>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={onInputChange}
            value={loginInfo.email}
          />
        </div>
        <div className={styles.Login__inputBox}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={onInputChange}
            value={loginInfo.password}
          />
        </div>

        <button className={styles.Login__submitButton}>submit</button>
      </form>
    </div>
  );
};

export default Login;
