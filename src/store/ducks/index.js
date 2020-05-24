import { combineReducers } from 'redux';
import snackBar from './snackbar';
import categories from './categories';
import products from './products';
import bag from './bag';

const reducers = combineReducers({
  snackBar,
  categories,
  products,
  bag
});

export default reducers;
