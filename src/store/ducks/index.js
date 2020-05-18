import { combineReducers } from 'redux';
import snackBar from './snackbar';
import categories from './categories';
import products from './products';

const reducers = combineReducers({
  snackBar,
  categories,
  products
});

export default reducers;
