import React from 'react';
import '~/config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import {View} from 'react-native';
import createNavigator from '~/routes';
import { Toast } from 'react-native-customizable-redux-toast';
import { colors } from '~/styles';

const Routes = createNavigator(false);

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="default" backgroundColor={colors.secondary} />
      <Routes />
    </View>
  </Provider>
);

export default App;
