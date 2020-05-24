import React from 'react';
import {
  IconSide,
  Container,
  CurrentLocation,
  CurrentText,
  IconCart,
} from './styles';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';
import { useSelector } from 'react-redux';

export default function HeaderMain() {
  const itemsBag = useSelector((state) => state.bag.products);
  return (
    <Container>
      <IconSide name="refresh" size={22} color="#f5f5f5" />
      <CurrentLocation>
        <CurrentText>Antônio Martins</CurrentText>
      </CurrentLocation>
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
    </Container>
  );
}

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
