import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import { Linking } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.0922;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const getCurrencyLocation = async () => {
  const isDev = __DEV__;

  const config = {
    timeout: 15000,
    enableHighAccuracy: isDev,
    maximumAge: 30000,
  };

  const get = (): Promise<GeolocationResponse> =>
    new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(resolve, reject, config);
    });

  const position = await get();

  return position;
};

export const openNavigation = (latitude: number, longitude: number) => {
  Linking.openURL(`google.navigation:q=${`${latitude},${longitude}&mode=c`}`);
};
