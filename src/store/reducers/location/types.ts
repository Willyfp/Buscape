import { TStatus } from '../types';
import { GeolocationResponse } from '@react-native-community/geolocation';

export type InitialStateLocationType = {
  status: TStatus;
  location: GeolocationResponse;
};
