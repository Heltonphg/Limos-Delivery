import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SnackBarActions, Types } from '../ducks/snackbar';
import api from '~/services/api';
import { CatActions } from '~/store/ducks/categories';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU5MDk0NzM5NX0.fK8MfsqMM00WwhyKeRzMOQA_Ic6F7IsajhD68zQ3MT0';

function* loadSnacks() {
  try {
    const { data } = yield call(api.get, '/snackbar_user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(SnackBarActions.snackbarsSuccess(data));
  } catch (e) {
    yield put(SnackBarActions.snackbarsFail());
  }
}

function* detailSnack(action) {
  const { data } = yield call(api.get, `/snackbar_user/${action.payload.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  yield put(SnackBarActions.detailSnackSuccess(data));
  yield put(CatActions.setCurrent(null));
}

export function* SnackSaga() {
  return yield all([
    takeLatest(Types.SNACKBAR_REQUEST, loadSnacks),
    takeLatest(Types.DATAIL_SNACK_REQUEST, detailSnack),
  ]);
}
