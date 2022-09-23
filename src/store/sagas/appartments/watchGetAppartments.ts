import { put, takeLatest } from 'redux-saga/effects';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import {
  GetAppartmentsCreators,
  GetAppartmentsTypes,
} from '../../reducers/appartments';

function* getAppartmentsRequest() {
  try {
    const appartments: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData> =
      yield firestore().collection('appartments').get();

    yield put(
      GetAppartmentsCreators.getAppartmentsSuccess(
        appartments.docs.map(apt => apt.data()) as any,
      ),
    );
  } catch (error) {
    yield put(GetAppartmentsCreators.getAppartmentsFailed());
  }
}

export default function* watch() {
  yield takeLatest(
    GetAppartmentsTypes.GET_APPARTMENTS_REQUEST,
    getAppartmentsRequest,
  );
}
