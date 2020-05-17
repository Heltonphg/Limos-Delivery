import { combineReducers } from 'redux';
import snackBar from './snackbar';
import categories from './categories';
const reducers = combineReducers({
  snackBar,
  categories
});

export default reducers;
