import { all } from 'redux-saga/effects';

import { SnackSaga } from './snackSaga';

export default function* rootSaga() {
  yield all([SnackSaga()]);
}
