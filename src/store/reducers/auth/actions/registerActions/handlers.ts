import { INITIAL_STATE_AUTH } from '../../reducer';

export const registerRequest = (state = INITIAL_STATE_AUTH) =>
  state.set('status', 'loading');

export const registerFailed = (state = INITIAL_STATE_AUTH) =>
  state.set('status', 'failed');
