import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { Action } from 'redux';
import { put, select, takeLatest } from 'redux-saga/effects';
import { RootState } from '../../reducers';
import {
  GetAppartmentsCreators,
  LikeAppartmentCreators,
  LikeAppartmentTypes,
} from '../../reducers/appartments';
import { LoginCreators } from '../../reducers/auth';
import { User } from '../../reducers/auth/types';
import { ProfileCreators } from '../../reducers/profile';
import { getState } from '../../utils';

type Props = Action & {
  appartmentID: string;
};

function* likeAppartment({ appartmentID }: Props) {
  try {
    const {
      auth: { user },
    }: RootState = yield select(getState);

    const doc: FirebaseFirestoreTypes.DocumentReference = yield firestore()
      .collection('appartments')
      .doc(appartmentID);

    const apartDoc: FirebaseFirestoreTypes.DocumentData = yield doc.get();

    const apartData = apartDoc.data();

    const res = doc.update({
      ...apartData,
      likes: apartData?.likes
        ? user.favorites
          ? !user.favorites.find(item => item === appartmentID)
            ? [...apartData.likes, user]
            : apartData.likes.filter(item => item.id !== user.id)
          : [...apartData.likes, user]
        : [user],
    });

    yield put(
      GetAppartmentsCreators.selectAppartment({
        ...apartData,
        likes: apartData?.likes
          ? user.favorites
            ? !user.favorites.find(item => item === appartmentID)
              ? [...apartData.likes, user]
              : apartData.likes.filter(item => item.id !== user.id)
            : [...apartData.likes, user]
          : [user],
      }),
    );

    const userDoc: FirebaseFirestoreTypes.DocumentReference = yield firestore()
      .collection('users')
      .doc(user.id);

    const userRes = userDoc.update({
      ...user,
      birthDate: String(user.birthDate),
      favorites: user.favorites
        ? !user.favorites.find(item => item === appartmentID)
          ? [...user.favorites, appartmentID]
          : user.favorites.filter(item => item !== appartmentID)
        : [appartmentID],
    });

    yield put(
      LoginCreators.loginSuccess({
        ...user,
        birthDate: String(user.birthDate),
        favorites: user.favorites
          ? !user.favorites.find(item => item === appartmentID)
            ? [...user.favorites, appartmentID]
            : user.favorites.filter(item => item !== appartmentID)
          : [appartmentID],
      }),
    );

    yield put(GetAppartmentsCreators.getAppartmentsRequest());
    yield put(LikeAppartmentCreators.likeAppartmentSuccess());
  } catch (error) {
    yield put(LikeAppartmentCreators.likeAppartmentFailed());
  }
}

export default function* watch() {
  yield takeLatest(LikeAppartmentTypes.LIKE_APPARTMENT_REQUEST, likeAppartment);
}
