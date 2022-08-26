import { createActions } from 'reduxsauce';
import { loadUser, loginFailed, loginRequest, loginSuccess } from './handlers';
import { LoginActionCreators, LoginActionTypes } from './types';

export const { Types, Creators } = createActions<
  LoginActionTypes,
  LoginActionCreators
>({
  loginRequest: ['data'],
  loginSuccess: ['user'],
  loginFailed: null,
  loadUser: null,
});

export const loginActions = {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILED]: loginFailed,
  [Types.LOAD_USER]: loadUser,
};
