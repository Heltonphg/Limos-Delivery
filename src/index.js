import React from 'react';
import '~/config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import createNavigator from '~/routes';
import { colors } from '~/styles';
import Modal from '~/components/Modals/ModalAvisos';
import ModalLoad from '~/components/Modals/ModalLoad';
import ModalInfos from '~/components/Modals/ModalInfos';
import FlashMessage from 'react-native-flash-message';

const Routes = createNavigator(false);

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="default" backgroundColor={colors.secondary} />
    <Routes />
    <Modal />
    <ModalLoad />
    <ModalInfos />
    <FlashMessage position="top" />
  </Provider>
);

export default App;
