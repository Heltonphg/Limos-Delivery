import { all, call, put, takeLatest } from 'redux-saga/effects';
import { bagActions, Types } from '../ducks/bag';
import api from '~/services/api';
import { AppActions } from '~/store/ducks/app';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4OTcyMzQxMH0.L-dngxpYwG-Jyp1Jh50f_MVs1BKUBtbkSaFJZciJgq0';

function* addToBag({ payload }) {
  try {
    const { data } = yield call(api.post, '/products_bag', payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(bagActions.create_product_success(data));
    yield put(AppActions.openModal('Ótimo', 'Produto Adicionado à sacola!', 'success'));
  } catch (e) {
    yield put(AppActions.openModal('Atenção', e.response.data.error.message));
    yield put(bagActions.create_product_fail(e.response.data));
  }
}

function* loadToProductBag() {
  try {
    const { data } = yield call(api.get, '/products_bag', {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(bagActions.load_bag_success(data));
  } catch (e) {
    console.log(e.response.data);
    yield put(bagActions.load_bag_fail(e.response.data));
  }
}

export function* BagSagas() {
  return yield all([
    takeLatest(Types.CREATE_PRODUCT_REQUEST, addToBag),
    takeLatest(Types.LOAD_BAG_REQUEST, loadToProductBag),
  ]);
}
