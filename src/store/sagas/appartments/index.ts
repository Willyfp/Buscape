import { all, fork } from 'redux-saga/effects';
import watchGetAppartments from './watchGetAppartments';
import watchLikeAppartment from './watchLikeAppartment';

function* getAppartmentsSagas() {
  yield all([fork(watchGetAppartments), fork(watchLikeAppartment)]);
}

export default getAppartmentsSagas;
