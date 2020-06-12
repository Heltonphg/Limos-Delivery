import { all, put, takeLatest } from 'redux-saga/effects';
import { Types } from '../ducks/app';
import { SnackBarActions } from '~/store/ducks/snackbar';
import { bagActions } from '~/store/ducks/bag';
import { CatActions } from '~/store/ducks/categories';

function* load_all() {
  yield put(CatActions.categories_request());
  yield put(SnackBarActions.snackbarsRequest());
  yield put(bagActions.load_bag_request());
}

export function* AppSagas() {
  return yield all([takeLatest(Types.LOAD_ALL, load_all)]);
}
