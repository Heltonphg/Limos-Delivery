import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import ForgotPassword from '~/pages/ForgotPassword';

const stackPages = createStackNavigator(
  {
    Login,
    ForgotPassword
  },
  {
    initialRouteName: 'Login',

    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login: {
          screen: stackPages,
        },
        Main: {
          screen: Main,
        },
      },
      {
        initialRouteName: userLogged ? 'Main' : 'Login',
      },
    ),
  );

export default Routes;
