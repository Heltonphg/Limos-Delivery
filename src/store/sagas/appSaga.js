import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Types } from '../ducks/app';
import { SnackBarActions } from '~/store/ducks/snackbar';
import { ProductActions } from '~/store/ducks/products';
import { bagActions } from '~/store/ducks/bag';

function* load_all() {
  yield put(SnackBarActions.snackbarsRequest());
  yield put(ProductActions.productRequest());
  yield put(bagActions.load_bag_request());
}

export function* AppSagas() {
  return yield all([takeLatest(Types.LOAD_ALL, load_all)]);
}
