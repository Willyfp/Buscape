import { INITIAL_STATE_PROFILE } from '../../reducer';

export const editProfileRequest = (state = INITIAL_STATE_PROFILE) =>
  state.set('status', 'loading');

export const editProfileSuccess = (state = INITIAL_STATE_PROFILE) =>
  state.set('status', 'success');

export const editProfileFailed = (state = INITIAL_STATE_PROFILE) =>
  state.set('status', 'failed');
