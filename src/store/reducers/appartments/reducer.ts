import { createReducer } from 'reduxsauce';
import SeamlessImmutable, { ImmutableObject } from 'seamless-immutable';
import { getAppartmentsActions } from './actions/getAppartmentsActions';
import { InitialStateAuthType } from './types';

export const INITIAL_STATE_APPARTMENTS: ImmutableObject<InitialStateAuthType> =
  SeamlessImmutable({
    status: 'idle',
    list: [],
  });

export default createReducer(INITIAL_STATE_APPARTMENTS, {
  ...getAppartmentsActions,
});
