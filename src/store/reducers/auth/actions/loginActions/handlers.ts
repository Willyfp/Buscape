import { Action } from 'redux';
import { INITIAL_STATE_AUTH } from '../../reducer';
import { User } from '../../types';

type LoginActionType = Action & {
  user: User;
};

export const loginRequest = (state = INITIAL_STATE_AUTH) =>
  state.set('status', 'loading');

export const loadUser = (state = INITIAL_STATE_AUTH) =>
  state.set('status', 'loading');

export const loginFailed = (state = INITIAL_STATE_AUTH) =>
  state.set('status', 'failed');

export const logout = (state = INITIAL_STATE_AUTH) =>
  state.merge({
    user: {},
    isAuth: false,
  });

export const loginSuccess = (
  state = INITIAL_STATE_AUTH,
  { user }: LoginActionType,
) =>
  state.merge({
    status: 'success',
    isAuth: true,
    user,
  });
