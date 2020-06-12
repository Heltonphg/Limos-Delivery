import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CatActions, Types } from '../ducks/categories';
import api from '~/services/api';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU5MDk0NzM5NX0.fK8MfsqMM00WwhyKeRzMOQA_Ic6F7IsajhD68zQ3MT0';

function* get_cartegories_request() {
  try {
    const { data } = yield call(api.get, `/category`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    yield put(CatActions.categories_success(data));
  } catch (e) {
    console.log(e);
  }
}

export function* CartegoriesSaga() {
  return yield all([
    takeLatest(Types.GET_CATEGORIES_REQUEST, get_cartegories_request),
  ]);
}
