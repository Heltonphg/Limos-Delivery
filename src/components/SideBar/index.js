import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {colors} from "~/styles";

export default function SideBar(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <DrawerNavigatorItems {...props} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  containerImage: {
    backgroundColor: 'red',
    width: 85,
    height: 85,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.whiter
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 6,
  },
  followers: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginRight: 4,
  },
});
