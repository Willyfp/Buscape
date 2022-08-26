import { GeolocationResponse } from '@react-native-community/geolocation';
import { AnyAction } from 'redux';

export type GetLocationActionTypes = {
  GET_CURRENT_LOCATION_REQUEST: string;
  GET_CURRENT_LOCATION_SUCCESS: string;
  GET_CURRENT_LOCATION_FAILED: string;
  SET_LOCATION: string;
};

export type GetLocationActionCreators = {
  getCurrentLocationRequest(): AnyAction;
  getCurrentLocationSuccess(location: GeolocationResponse): AnyAction;
  getCurrentLocationFailed(): AnyAction;
  setLocation(location: GeolocationResponse): AnyAction;
};
