import React from 'react';
import '~/config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import createNavigator from '~/routes';
import { colors } from '~/styles';
import Modal from '~/components/Modals';

const Routes = createNavigator(false);

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="default" backgroundColor={colors.secondary} />
    <Routes />
    <Modal />
  </Provider>
);

export default App;
