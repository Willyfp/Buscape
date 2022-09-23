import { all, fork } from 'redux-saga/effects';
import getAppartmentsSagas from './appartments';

import authSagas from './auth';
import locationSagas from './location';

function* rootSagas() {
  yield all([fork(authSagas), fork(locationSagas), fork(getAppartmentsSagas)]);
}

export default rootSagas;
