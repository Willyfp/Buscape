import { all, fork } from 'redux-saga/effects';
import watchGetAppartments from './watchGetAppartments';

function* getAppartmentsSagas() {
  yield all([fork(watchGetAppartments)]);
}

export default getAppartmentsSagas;
