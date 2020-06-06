import { all } from 'redux-saga/effects';

import { SnackSaga } from './snackSaga';

import { ProductSaga } from '~/store/sagas/productSaga';
import { BagSagas } from '~/store/sagas/bagSaga';
import { AppSagas } from '~/store/sagas/appSaga';

export default function* rootSaga() {
  yield all([SnackSaga(), ProductSaga(), BagSagas(), AppSagas()]);
}
