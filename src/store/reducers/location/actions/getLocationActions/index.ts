import { createActions } from 'reduxsauce';
import {
  getCurrentLocationFailed,
  getCurrentLocationRequest,
  getCurrentLocationSuccess,
  setLocation,
} from './handlers';
import { GetLocationActionCreators, GetLocationActionTypes } from './types';

export const { Types, Creators } = createActions<
  GetLocationActionTypes,
  GetLocationActionCreators
>({
  getCurrentLocationRequest: null,
  getCurrentLocationSuccess: ['location'],
  getCurrentLocationFailed: null,
  setLocation: ['location'],
});

export const getLocationActions = {
  [Types.GET_CURRENT_LOCATION_REQUEST]: getCurrentLocationRequest,
  [Types.GET_CURRENT_LOCATION_SUCCESS]: getCurrentLocationSuccess,
  [Types.GET_CURRENT_LOCATION_FAILED]: getCurrentLocationFailed,
  [Types.SET_LOCATION]: setLocation,
};
