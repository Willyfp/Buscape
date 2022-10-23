import { createReducer } from 'reduxsauce';
import SeamlessImmutable, { ImmutableObject } from 'seamless-immutable';
import { editProfileActions } from './actions/profileActions';
import { InitialStateProfileType } from './types';

export const INITIAL_STATE_PROFILE: ImmutableObject<InitialStateProfileType> =
  SeamlessImmutable({
    status: 'idle',
  });

export default createReducer(INITIAL_STATE_PROFILE, {
  ...editProfileActions,
});
