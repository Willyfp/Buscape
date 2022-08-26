import { Action } from 'redux';

import { GeolocationResponse } from '@react-native-community/geolocation';
import { INITIAL_STATE_LOCATION } from '../../reducer';

type LocationActionType = Action & {
  location: GeolocationResponse;
};

export const getCurrentLocationRequest = (state = INITIAL_STATE_LOCATION) =>
  state.set('status', 'loading');

export const getCurrentLocationFailed = (state = INITIAL_STATE_LOCATION) =>
  state.set('status', 'failed');

export const getCurrentLocationSuccess = (
  state = INITIAL_STATE_LOCATION,
  { location }: LocationActionType,
) =>
  state.merge({
    status: 'success',
    location,
  });

export const setLocation = (
  state = INITIAL_STATE_LOCATION,
  { location }: LocationActionType,
) => state.set('location', location);
