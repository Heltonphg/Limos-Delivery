import { all, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import { CatActions, Types } from '../ducks/categories';
import api from '~/services/api';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU5MDk0NzM5NX0.fK8MfsqMM00WwhyKeRzMOQA_Ic6F7IsajhD68zQ3MT0';

function* CategoryRequest() {
  try {
    const { data } = yield call(api.get, '/category', {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(CatActions.categorySucess(data));
  } catch (e) {
    yield put(CatActions.categoryFail());
  }
}

function* loadCategoryRequest(action) {
  const categories = yield select((state) => state.categories.allcategories);
  let catSnack = action.payload.split(',');
  let arrayCatsSnacks = [];
  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < catSnack.length; j++) {
      if (categories[i].id == catSnack[j]) {
        arrayCatsSnacks.push(categories[i]);
      }
    }
  }
  yield put(CatActions.loadCategorySnackSuccess(arrayCatsSnacks));
}

export function* CatSagas() {
  return yield all([
    takeLatest(Types.CATEGORY_REQUEST, CategoryRequest),
    takeLatest(Types.LOAD_CATEGORY_REQUEST_ONLY_SNACK, loadCategoryRequest),
  ]);
}
