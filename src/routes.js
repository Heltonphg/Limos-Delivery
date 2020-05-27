import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Fake from '~/components/fake';

import React from 'react';
import Main from '~/pages/Main';
import Login from '~/pages/Login';
import ForgotPassword from '~/pages/ForgotPassword';
import DetailSnackBar from '~/pages/DetailSnackBar';
import DetailProduct from '~/pages/DetailProduct';
import Bag from '~/pages/Bag';

import {colors} from "~/styles";

const stackMain = createStackNavigator(
  {
    Main,
    DetailSnackBar,
    DetailProduct,
    Bag
  },
  {
    initialRouteName: 'Main',

    defaultNavigationOptions: {
      headerShown: false,
    },
    navigationOptions: ({ navigation }) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
      return {
        tabBarVisible,
      };
    },
  },
);

const MainTabs = createBottomTabNavigator(
  {
    Main: {
      screen: stackMain,
      navigationOptions: {
        title: 'Início'
      }
    },
    Pedidos: {
      screen: Fake,
      navigationOptions: {
        title: 'Pedidos'
      }
    },
    Favorite: {
      screen: Fake,
      navigationOptions: {
        title: 'favoritos'
      }
    },
    Profile: {
      screen: Fake,
      navigationOptions: {
        title: 'Perfil'
      }
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Main') {
          iconName = 'view-dashboard';
        } else if (routeName === 'Favorite') {
          iconName = 'heart-outline';
        } else if (routeName === 'Pedidos') {
          iconName = 'food';
        } else if (routeName === 'Statics') {
          iconName = 'chart-arc';
        } else if (routeName === 'Profile') {
          iconName = 'account-outline';
        }

        return (
          <Icon
            name={iconName}
            color={tintColor}
            size={25}
          />
        );
      },
    }),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: colors.secondary,
      inactiveTintColor: '#C0C0C0',
      style: {
        backgroundColor: colors.white,
        borderTopColor: colors.primary,
      },
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
          screen: MainTabs,
        },
      },
      {
        initialRouteName: userLogged ? 'Main' : 'Login',
      },
    ),
  );

export default Routes;
