import React, { useReducer } from 'react';
import authReducer from './authReducer';
import AuthContext from './authContext';

const AuthState = props => {
  const initialState = {
    token: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //login and get token

  //logout

  //delete token from header

  return (
    <AuthContext.Provider
      value={{
        token: state.token
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
