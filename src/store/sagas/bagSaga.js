import { all, call, put, takeLatest } from 'redux-saga/effects';
import { bagActions, Types } from '../ducks/bag';
import api from '~/services/api';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4OTcyMzQxMH0.L-dngxpYwG-Jyp1Jh50f_MVs1BKUBtbkSaFJZciJgq0';

function* addToBag({ payload }) {

}

export function* BagSagas() {
  return yield all([takeLatest(Types.CREATE_PRODUCT_REQUEST, addToBag)]);
}
