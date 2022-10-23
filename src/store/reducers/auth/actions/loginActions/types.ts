import { AnyAction } from 'redux';
import { FieldValuesLogin } from '../../../../../types/FieldValues';
import { User } from '../../types';

export type LoginActionTypes = {
  LOGIN_REQUEST: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILED: string;
  LOAD_USER: string;
  LOGOUT: string;
};

export type LoginActionCreators = {
  loginRequest(data: FieldValuesLogin): AnyAction;
  loginSuccess(user: User): AnyAction;
  loginFailed(): AnyAction;
  loadUser(): AnyAction;
  logout(): AnyAction;
};
