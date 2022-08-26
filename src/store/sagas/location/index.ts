import { all, fork } from 'redux-saga/effects';
import watchGetCurrentLocation from './watchGetCurrentLocation';

function* locationSagas() {
  yield all([fork(watchGetCurrentLocation)]);
}

export default locationSagas;
