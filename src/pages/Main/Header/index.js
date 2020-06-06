import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  IconSide,
  Container,
  CurrentLocation,
  CurrentText,
  IconCart,
} from './styles';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';
import { useSelector, useDispatch } from 'react-redux';
import { SnackBarActions } from '~/store/ducks/snackbar';
import { TouchableOpacity } from 'react-native';
import { AppActions } from '~/store/ducks/app';

function HeaderMain({ navigation }) {
  const dispatch = useDispatch();
  const itemsBag = useSelector((state) => state.bag.products);
  return (
    <Container>
      <IconSide
        onPress={() => dispatch(AppActions.load_all())}
        name="refresh"
        size={22}
        color="#f5f5f5"
      />
      <CurrentLocation>
        <CurrentText>Antônio Martins</CurrentText>
      </CurrentLocation>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Bag', {
            products: itemsBag,
          })
        }
        style={{
          width: 30,
          height: 41,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <IconCart name="shopping-bag" />
        {itemsBag.length > 0 && (
          <View style={styles.bad}>
            <Text
              style={{
                color: 'white',
                fontSize: 10,
                fontFamily: fonts.primary,
              }}>
              {itemsBag.length}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </Container>
  );
}

export default withNavigation(HeaderMain);

const styles = StyleSheet.create({
  bad: {
    position: 'absolute',
    right: 0,
    top: 0,
    left: 22,
    backgroundColor: colors.terciary,
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
