import { createReducer } from 'reduxsauce';
import SeamlessImmutable, { ImmutableObject } from 'seamless-immutable';
import { loginActions } from './actions/loginActions';
import { registerActions } from './actions/registerActions';
import { InitialStateAuthType, User } from './types';

export const INITIAL_STATE_AUTH: ImmutableObject<InitialStateAuthType> =
  SeamlessImmutable({
    status: 'idle',
    isAuth: false,
    user: {} as User,
  });

export default createReducer(INITIAL_STATE_AUTH, {
  ...registerActions,
  ...loginActions,
});
