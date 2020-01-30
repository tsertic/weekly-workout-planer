import React from 'react';
import styles from './SignUp.module.css';
const SignUp = props => {
  const { signupInfo, handleSubmit, onInputChange } = props;
  return (
    <div className={styles.SignUp}>
      <h1 className={styles.SignUp__title}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.SignUp__inputBox}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={onInputChange}
            value={signupInfo.name}
          />
        </div>
        <div className={styles.SignUp__inputBox}>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={onInputChange}
            value={signupInfo.email}
          />
        </div>
        <div className={styles.SignUp__inputBox}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={onInputChange}
            value={signupInfo.password}
          />
        </div>
        <div className={styles.SignUp__inputBox}>
          <label>Confirm password: </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={onInputChange}
            value={signupInfo.confirmPassword}
          />
        </div>

        <button className={styles.SignUp__submitButton}>submit</button>
      </form>
    </div>
  );
};

export default SignUp;
