import { Action } from 'redux';
import { INITIAL_STATE_AUTH } from '../../reducer';
import { User } from '../../types';

type RegisterActionType = Action & {
  user: User;
};

export const registerRequest = (state = INITIAL_STATE_AUTH) =>
  state.set('status', 'loading');

export const registerFailed = (state = INITIAL_STATE_AUTH) =>
  state.set('status', 'failed');
