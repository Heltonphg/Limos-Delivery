import { combineReducers } from 'redux';
import snackBar from './snackbar';
import categories from './categories';
import products from './products';
import bag from './bag';
import app from './app';


const reducers = combineReducers({
  snackBar,
  categories,
  products,
  bag,
  app
});

export default reducers;
