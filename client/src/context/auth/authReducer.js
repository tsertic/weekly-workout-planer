import { authTypes } from './../types';

export default (state, action) => {
  switch (action.type) {
    case authTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };

    case authTypes.REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true
      };
    case authTypes.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true
      };
    case authTypes.REGISTER_FAIL:
    case authTypes.AUTH_ERROR:
    case authTypes.LOGIN_FAIL:
    case authTypes.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload
      };
    case authTypes.REGISTER_FORM:
      return {
        ...state,
        currentAuthForm: 'register'
      };
    case authTypes.LOGIN_FORM:
      return {
        ...state,
        currentAuthForm: 'login'
      };
    case authTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
