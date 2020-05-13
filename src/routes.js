import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Fake from '~/components/fake';
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


// const pageDrawer = createDrawerNavigator(
//   {
//     Main: {
//       screen: stackMain,
//       navigationOptions: {
//         title: 'Home',
//         drawerIcon: ({ tintColor }) => (
//           <Icon name="grid" size={18} color={tintColor} />
//         ),
//       },
//     },
//   },
//   {
//     contentComponent: (props) => <SideBar {...props} />,
//     drawerWidth: Dimensions.get('window').width * 0.85,
//     unmountInactiveRoutes: true,
//     contentOptions: {
//       activeBackgroundColor: colors.whiter,
//       activeLabelStyle: {
//         fontSize: 16,
//       },
//       inactiveLabelStyle: {
//         fontSize: 16,
//       },
//       itemsContainerStyle: {
//         marginVertical: -5,
//       },
//       activeTintColor: colors.secondary,
//     },
//   },
// );
