import { createReducer } from 'reduxsauce';
import SeamlessImmutable, { ImmutableObject } from 'seamless-immutable';
import { InitialStateLocationType } from './types';
import { GeolocationResponse } from '@react-native-community/geolocation';
import { getLocationActions } from './actions/getLocationActions';

export const INITIAL_STATE_LOCATION: ImmutableObject<InitialStateLocationType> =
  SeamlessImmutable({
    status: 'idle',
    location: {} as GeolocationResponse,
  });

export default createReducer(INITIAL_STATE_LOCATION, {
  ...getLocationActions,
});
