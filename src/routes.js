import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SideBar from '~/components/SideBar';

import React from 'react';
import { Dimensions } from 'react-native';
import Main from '~/pages/Main';
import Login from '~/pages/Login';
import ForgotPassword from '~/pages/ForgotPassword';
import DetailSnackBar from '~/pages/DetailSnackBar';

import {colors} from "~/styles";

const stackMain = createStackNavigator(
  {
    Main,
    DetailSnackBar
  },
  {
    initialRouteName: 'Main',

    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const pageDrawer = createDrawerNavigator(
  {
    Main: {
      screen: stackMain,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon name="grid" size={18} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: (props) => <SideBar {...props} />,
    drawerWidth: Dimensions.get('window').width * 0.85,
    unmountInactiveRoutes: true,
    contentOptions: {
      activeBackgroundColor: colors.whiter,
      activeLabelStyle: {
        fontSize: 16,
      },
      inactiveLabelStyle: {
        fontSize: 16,
      },
      itemsContainerStyle: {
        marginVertical: -5,
      },
      activeTintColor: colors.secondary,
    },
  },
);

const stackPages = createStackNavigator(
  {
    Login,
    ForgotPassword,
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
          screen: pageDrawer,
        },
      },
      {
        initialRouteName: userLogged ? 'Main' : 'Login',
      },
    ),
  );

export default Routes;
