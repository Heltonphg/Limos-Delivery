import { all, call, put, delay, takeLatest } from 'redux-saga/effects';
import { SnackBarActions, Types } from '../ducks/snackbar';
import api from '~/services/api';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4ODc5Nzc5M30.5xjRNt61-0fr_QMwvuHFkRXlN-vFvL14UxcMoKWOGpo';

function* loadSnacks() {
  try {
    const { data } = yield call(api.get, '/snackbar', {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield delay(2000);
    yield put(SnackBarActions.snackbarsSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* detailSnack(action) {
  const { data } = yield call(api.get, `/snackbar/${action.payload.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  yield put(SnackBarActions.detailSnackSuccess(data));

}

export function* SnackSaga() {
  return yield all([
    takeLatest(Types.SNACKBAR_REQUEST, loadSnacks),
    takeLatest(Types.DATAIL_SNACK_REQUEST, detailSnack),
  ]);
}
