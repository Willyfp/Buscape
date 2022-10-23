import { all, fork } from 'redux-saga/effects';
import getAppartmentsSagas from './appartments';

import authSagas from './auth';
import locationSagas from './location';
import profileSagas from './profile';

function* rootSagas() {
  yield all([
    fork(authSagas),
    fork(locationSagas),
    fork(getAppartmentsSagas),
    fork(profileSagas),
  ]);
}

export default rootSagas;
