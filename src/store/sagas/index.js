import { all } from 'redux-saga/effects';

import { SnackSaga } from './snackSaga';
import {CatSagas} from "~/store/sagas/catSaga";

export default function* rootSaga() {
  yield all([SnackSaga(), CatSagas()]);
}
