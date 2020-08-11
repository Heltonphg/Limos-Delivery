import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SnackBarActions, Types } from '../ducks/snackbar';
import api from '~/services/api';
import { CatActions } from '~/store/ducks/categories';

import { JWT } from '~/config/general';

const token = JWT;
function* loadSnacks() {
  try {
    const { data } = yield call(api.get, '/snackbar_user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    let s = [
      {
        id: 0,
        title: 'Lanchonetes Abertas',
        snacks: [],
      },
      {
        id: 1,
        title: 'Lanchonetes Fechadas',
        snacks: [],
      },
    ];
    data.forEach((i) => {
      if (i.is_open == true) {
        s[0].snacks.push(i);
      } else if (i.is_open == false) {
        s[1].snacks.push(i);
      }
    });
    yield put(SnackBarActions.snackbarsSuccess(s));
  } catch (e) {
    yield put(SnackBarActions.snackbarsFail());
  }
}

function* detailSnack(action) {
  const { data } = yield call(api.get, `/snackbar_user/${action.payload.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  yield put(SnackBarActions.detailSnackSuccess(data));
  yield put(CatActions.setCurrent(null));
}

export function* SnackSaga() {
  return yield all([
    takeLatest(Types.SNACKBAR_REQUEST, loadSnacks),
    takeLatest(Types.DATAIL_SNACK_REQUEST, detailSnack),
  ]);
}
