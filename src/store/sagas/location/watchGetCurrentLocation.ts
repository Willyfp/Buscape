import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import { put, takeLatest } from 'redux-saga/effects';
import { getCurrencyLocation } from '../../../utils/location';
import { GetLocationCreators, GetLocationTypes } from '../../reducers/location';

function* getCurrentLocationRequest() {
  try {
    const location: GeolocationResponse = yield getCurrencyLocation();

    yield put(GetLocationCreators.getCurrentLocationSuccess(location));
  } catch (error) {
    yield put(GetLocationCreators.getCurrentLocationFailed());
  }
}

export default function* watch() {
  yield takeLatest(
    GetLocationTypes.GET_CURRENT_LOCATION_REQUEST,
    getCurrentLocationRequest,
  );
}
