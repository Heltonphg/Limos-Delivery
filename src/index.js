import React from 'react';

import '~/config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import createNavigator from '~/routes';
const Routes = createNavigator(false);

import { colors } from '~/styles';

const App = () => (
  <Provider store={store}>

    <StatusBar barStyle="default" backgroundColor={colors.secondary} />
    <Routes />
  </Provider>
);

export default App;
