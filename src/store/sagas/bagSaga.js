import { all, call, put, takeLatest } from 'redux-saga/effects';
import { bagActions, Types } from '../ducks/bag';
import api from '~/services/api';
import { showMessage } from 'react-native-flash-message';
import { AppActions } from '~/store/ducks/app';
import { JWT } from '~/config/general';

const token = JWT;

function* addToBag({ payload }) {
  try {
    yield put(AppActions.openModalLoad());
    yield call(api.post, '/products_bag', payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(bagActions.create_product_success());
    yield call(loadToProductBag);
    yield put(AppActions.closeModalLoading());
    showMessage({
      message: 'Ótimo',
      description: 'Produto adicionado a sacola!',
      type: 'success',
      icon: 'success',
      floating: true,
    });
  } catch (e) {
    yield put(AppActions.closeModalLoading());
    showMessage({
      message: 'Atenção',
      description: e.response.data.error.message,
      type: 'warning',
      floating: true,
      icon: 'warning',
    });
    yield put(bagActions.create_product_fail());
  }
}

function* loadToProductBag() {
  try {
    const { data } = yield call(api.get, '/products_bag', {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(bagActions.load_bag_success(data));
  } catch (e) {
    yield put(bagActions.load_bag_fail());
  }
}

function* updateProductBag({ payload }) {
  yield put(AppActions.openModalLoad());

  if (payload.quantity == 1 && payload.add == false) {
    yield call(api.delete, `/products_bag/${payload.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield call(loadToProductBag);
    yield put(AppActions.closeModalLoading());
  } else {
    const newProductBag = {
      quantity: payload.quantity + (payload.add ? 1 : -1),
      price:
        payload.price_original * (payload.quantity + (payload.add ? 1 : -1)),
    };
    yield call(api.patch, `/products_bag/${payload.id}`, newProductBag, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield call(loadToProductBag);
    yield put(AppActions.closeModalLoading());
  }
}

export function* BagSagas() {
  return yield all([
    takeLatest(Types.CREATE_PRODUCT_REQUEST, addToBag),
    takeLatest(Types.LOAD_BAG_REQUEST, loadToProductBag),
    takeLatest(Types.UPDATE_PODUCT_REQUEST, updateProductBag),
  ]);
}
