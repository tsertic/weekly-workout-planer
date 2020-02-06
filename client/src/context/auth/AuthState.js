import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { authTypes } from './../types';
import setAuthToken from '../../components/utils/setAuthToken';

const AuthState = props => {
  const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    error: null,
    currentAuthForm: 'login'
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User
  const loadUser = async () => {
    //@todo- load token into global headers
    if (localStorage.token) {
      setAuthToken(localStorage.token);

      try {
        const res = await axios.get('/api/auth');
        dispatch({
          type: authTypes.USER_LOADED,
          payload: res.data
        });
      } catch (err) {
        dispatch({ type: authTypes.AUTH_ERROR });
      }
    }
  };
  //Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: authTypes.REGISTER_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (err) {
      const errorMsg = err.response.data.errors
        ? err.response.data.errors[0].msg
        : err.response.data.msg;
      dispatch({
        type: authTypes.REGISTER_FAIL,
        payload: errorMsg
      });
    }
  };
  //Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/auth', formData, config);
      dispatch({
        type: authTypes.LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: authTypes.LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };
  //logout
  const logout = () => dispatch({ type: authTypes.LOGOUT });

  //Clear Errors
  const clearErrors = () => dispatch({ type: authTypes.CLEAR_ERRORS });

  //set to register form
  const registerForm = () => dispatch({ type: authTypes.REGISTER_FORM });
  //set to login form
  const loginForm = () => dispatch({ type: authTypes.LOGIN_FORM });

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        currentAuthForm: state.currentAuthForm,
        registerForm,
        loginForm,
        register,
        clearErrors,
        login,
        logout,
        loadUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
