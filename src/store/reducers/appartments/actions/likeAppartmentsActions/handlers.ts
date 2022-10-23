import { INITIAL_STATE_APPARTMENTS } from '../../reducer';

export const likeAppartmentRequest = (state = INITIAL_STATE_APPARTMENTS) =>
  state.set('status', 'loading');

export const likeAppartmentFailed = (state = INITIAL_STATE_APPARTMENTS) =>
  state.set('status', 'failed');

export const likeAppartmentSuccess = (state = INITIAL_STATE_APPARTMENTS) =>
  state.set('status', 'success');
