import { all } from 'redux-saga/effects';

import { SnackSaga } from './snackSaga';
import { CatSagas } from '~/store/sagas/catSaga';
import { ProductSaga } from '~/store/sagas/productSaga';
import { BagSagas } from '~/store/sagas/bagSaga';

export default function* rootSaga() {
  yield all([SnackSaga(), CatSagas(), ProductSaga(),BagSagas()]);
}
