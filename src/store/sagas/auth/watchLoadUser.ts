import { put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { LoginCreators, LoginTypes } from '../../reducers/auth';

function* loadUser() {
  try {
    const value: string = yield AsyncStorage.getItem('user');

    if (value) {
      const data = JSON.parse(value);

      const user: FirebaseAuthTypes.User =
        yield auth().signInWithEmailAndPassword(data.email, data.password);

      const userDoc: FirebaseFirestoreTypes.DocumentData = yield firestore()
        .collection('users')
        .doc(user.uid)
        .get();

      const formattedUser = {
        id: user.uid,
        email: user.email || '',
        name: userDoc.name,
      };
      yield put(LoginCreators.loginSuccess(formattedUser));
    } else {
      throw 'Nenhum usuário salvo';
    }
  } catch (error) {
    yield put(LoginCreators.loginFailed());
  }
}

export default function* watch() {
  yield takeLatest(LoginTypes.LOAD_USER, loadUser);
}
