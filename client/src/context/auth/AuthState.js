import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FORM,
  LOGIN_FORM
} from './../types';
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
          type: USER_LOADED,
          payload: res.data
        });
        console.log('unutar load user');
      } catch (err) {
        dispatch({ type: AUTH_ERROR });
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
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
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
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };
  //logout
  const logout = () => dispatch({ type: LOGOUT });
  //Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  //set to register form
  const registerForm = () => dispatch({ type: REGISTER_FORM });
  //set to login form
  const loginForm = () => dispatch({ type: LOGIN_FORM });
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
