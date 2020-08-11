import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CatActions, Types } from '../ducks/categories';
import api from '~/services/api';
import { JWT } from '~/config/general';

const token = JWT;
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
