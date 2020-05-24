import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SnackBarActions, Types } from '../ducks/snackbar';
import api from '~/services/api';
import {CatActions} from "~/store/ducks/categories";

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4OTcyMzQxMH0.L-dngxpYwG-Jyp1Jh50f_MVs1BKUBtbkSaFJZciJgq0';

function* loadSnacks() {
  try {
    const { data } = yield call(api.get, '/snackbar', {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(SnackBarActions.snackbarsSuccess(data));
  } catch (e) {
    yield put(SnackBarActions.snackbarsFail());
  }
}

function* detailSnack(action) {
  const { data } = yield call(api.get, `/snackbar/${action.payload.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  yield put(SnackBarActions.detailSnackSuccess(data));
  yield put(CatActions.loadCategoryRequestOnlySnack(data.categories));
  yield put(CatActions.setCurrent(null));


}

export function* SnackSaga() {
  return yield all([
    takeLatest(Types.SNACKBAR_REQUEST, loadSnacks),
    takeLatest(Types.DATAIL_SNACK_REQUEST, detailSnack),
  ]);
}
