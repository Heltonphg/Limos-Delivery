import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { ProductActions, Types } from '../ducks/products';
import api from '~/services/api';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU5MDk0NzM5NX0.fK8MfsqMM00WwhyKeRzMOQA_Ic6F7IsajhD68zQ3MT0';

function* productRequest(action) {
  try {
    const { data } = yield call(
      api.get,
      `/snackbar/${action.payload.snackbar_id}/products`,
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          category_id: action.payload.category_id,
        },
      },
    );

    yield put(ProductActions.productSuccess(data));
  } catch (e) {
    yield put(ProductActions.productFail());
  }
}

export function* ProductSaga() {
  return yield all([takeLatest(Types.PRODUCT_REQUEST, productRequest)]);
}
