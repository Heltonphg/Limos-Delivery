import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  IconSide,
  Container,
  CurrentLocation,
  CurrentText,
  IconCart,
  BagButton,
} from './styles';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';
import { useSelector, useDispatch } from 'react-redux';
import { SnackBarActions } from '~/store/ducks/snackbar';

function HeaderMain({ navigation }) {
  const dispatch = useDispatch();
  const itemsBag = useSelector((state) => state.bag.products);
  return (
    <Container>
      <IconSide
        onPress={() => dispatch(SnackBarActions.snackbarsRequest())}
        name="refresh"
        size={22}
        color="#f5f5f5"
      />
      <CurrentLocation>
        <CurrentText>Antônio Martins</CurrentText>
      </CurrentLocation>
      <IconCart
        onPress={() =>
          navigation.navigate('Bag', {
            products: itemsBag,
          })
        }
        name="shopping-bag"
      />
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
    </Container>
  );
}

export default withNavigation(HeaderMain);

const styles = StyleSheet.create({
  bad: {
    position: 'absolute',
    right: 4,
    top: 11,
    backgroundColor: colors.terciary,
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
